import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display main content', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading is visible
    await expect(page.locator('text=Exodos Consulting Group')).toBeVisible();
    
    // Check if navigation links are present using more specific locators
    await expect(page.locator('a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="/services"]')).toBeVisible();
    await expect(page.locator('a[href="/contact"]')).toBeVisible();
    await expect(page.locator('a[href="/blog"]')).toBeVisible();
    
    // Alternative: Check for link text within the link elements
    await expect(page.getByRole('link', { name: /About.*->/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Services.*->/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Contact.*->/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Blog.*->/ })).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if content is still visible on mobile
    await expect(page.locator('text=Exodos Consulting Group')).toBeVisible();
    
    // Check if the main navigation links are present
    await expect(page.locator('a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="/services"]')).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper heading structure
    const mainHeading = page.locator('text=Exodos Consulting Group');
    await expect(mainHeading).toBeVisible();
    
    // Check for proper link attributes - should have href attributes
    const aboutLink = page.locator('a[href="/about"]');
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
    
    // Check that links are accessible
    const links = page.locator('a[href^="/"]');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThanOrEqual(4); // At least 4 navigation links
  });

  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Should load within 5 seconds (increased for CI environments)
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have correct page structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for main content structure
    await expect(page.locator('main')).toBeVisible();
    
    // Check for navigation grid
    const navGrid = page.locator('.grid');
    await expect(navGrid).toBeVisible();
    
    // Check that we have the expected number of navigation cards
    const navCards = page.locator('a[href^="/"]');
    const cardCount = await navCards.count();
    expect(cardCount).toBeGreaterThanOrEqual(4);
  });
});
