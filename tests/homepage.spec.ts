import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display main content', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading is visible
    await expect(page.locator('text=Exodos Consulting Group')).toBeVisible();
    
    // Check if navigation links are present
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Services')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
    await expect(page.locator('text=Blog')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if content is still visible on mobile
    await expect(page.locator('text=Exodos Consulting Group')).toBeVisible();
    
    // Check if the layout adapts to mobile
    const heading = page.locator('text=Exodos Consulting Group');
    await expect(heading).toHaveCSS('text-align', 'center');
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper heading structure
    const mainHeading = page.locator('text=Exodos Consulting Group');
    await expect(mainHeading).toBeVisible();
    
    // Check for proper link attributes
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });
});
