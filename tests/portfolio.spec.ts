import { expect, test } from "@playwright/test";
import { navigation, projects } from "../src/data/pt";
test.beforeEach(async ({ page }) => {
  await page.goto("./");
});
test("apresenta conteúdo principal, projetos e estados honestos", async ({
  page,
}) => {
  await expect(page).toHaveTitle(/Gerson Dias/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Gerson Dias",
  );
  for (const [id] of navigation)
    await expect(page.locator(`#${id}`)).toBeAttached();
  for (const project of projects)
    await expect(
      page.getByRole("heading", { name: project.name, exact: true }),
    ).toBeVisible();
  await expect(page.getByText("Em preparação", { exact: true })).toHaveCount(3);
  await page
    .locator(".project-card")
    .first()
    .getByText("Explorar projeto")
    .click();
  await expect(
    page.getByText("Integração com Google Drive.", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".resume-unavailable")).toHaveCount(2);
});
test("navega pelo menu e acompanha a seção atual", async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const [id, label] of navigation) {
    await page.locator("#sobre").scrollIntoViewIfNeeded();
    await expect(page.locator(".header")).not.toHaveClass(/header-intro/);
    if (isMobile)
      await page.getByRole("button", { name: "Abrir menu" }).click();
    const link = page
      .getByRole("navigation")
      .getByRole("link", { name: label, exact: true });
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(
      page.locator(`#main-navigation a[href="#${id}"]`),
    ).toHaveAttribute("aria-current", "location");
    if (isMobile)
      await expect(page.locator("#menu-toggle")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
  }
});
test("alterna e persiste o tema", async ({ page }) => {
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Ativar tema claro" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Ativar tema escuro" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
test("links internos têm destino e externos são seguros", async ({ page }) => {
  for (const link of await page.locator('a[href^="#"]').all()) {
    const href = await link.getAttribute("href");
    await expect(page.locator(href!)).toHaveCount(1);
  }
  for (const link of await page.locator('a[href^="https://"]').all()) {
    const url = new URL((await link.getAttribute("href"))!);
    expect(url.hostname).toMatch(
      /^(www\.)?(linkedin\.com|github\.com|qavault\.com\.br)$/,
    );
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("rel", /noreferrer/);
  }
});
test("não apresenta overflow, erros JavaScript ou recursos quebrados", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
  });
  await page.reload();
  await page.getByRole("link", { name: "Conhecer projetos" }).click();
  await page.getByRole("button", { name: "Ativar tema claro" }).click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
});
test("oferece navegação por teclado e fallback para foto ausente", async ({
  page,
  isMobile,
}) => {
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#content$/);
  await expect(page.locator(".monogram")).toBeVisible();
  if (isMobile) {
    await page.locator("#sobre").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Abrir menu" }).click();
    await page.getByRole("navigation").getByRole("link").first().focus();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Abrir menu" }),
    ).toBeFocused();
  }
});

test("mostra navegação após os atalhos e oculta novamente no topo", async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".header")).toHaveClass(/header-intro/);
  await expect(page.locator("#main-navigation")).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Ativar tema claro" }),
  ).toBeVisible();
  await page
    .locator(".hero-buttons")
    .getByRole("link", { name: "Experiência", exact: true })
    .click();
  await expect(page.locator(".header")).not.toHaveClass(/header-intro/);
  if (isMobile) await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Início", exact: true })
    .click();
  await expect(page.locator(".header")).toHaveClass(/header-intro/);
  await expect(page.locator("#main-navigation")).not.toBeVisible();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test("botão flutuante retorna ao topo e restaura o foco", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const button = page.getByRole("button", { name: "Voltar ao início" });
  await expect(button).toHaveCount(0);
  await page.locator("#projetos").scrollIntoViewIfNeeded();
  await expect(button).toBeVisible();
  const bounds = await button.boundingBox();
  const viewport = page.viewportSize()!;
  expect(bounds!.x).toBeGreaterThan(viewport.width - 100);
  expect(bounds!.y).toBeGreaterThan(viewport.height - 100);
  await button.focus();
  await page.keyboard.press("Enter");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
  await expect(button).toHaveCount(0);
});
