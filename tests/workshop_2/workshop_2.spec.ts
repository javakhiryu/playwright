import {test, expect} from '@playwright/test'

test.only('Automation Form Submissions', async ({page})=>{
    const firstTodoContent = "one";
    const secondTodoContent = "two";
    
    await page.goto('https://demo.playwright.dev/todomvc');
    const newTodo = await page.getByPlaceholder('What needs to be done?');
    await newTodo.fill(firstTodoContent);
    await newTodo.press('Enter');
    await newTodo.fill(secondTodoContent);
    await newTodo.press('Enter');

    const firstTodo = page.getByTestId("todo-item").nth(0);
    await firstTodo.getByRole('checkbox').check();
    await expect(firstTodo).toHaveClass('completed');

    const secondTodo = page.getByTestId("todo-item").nth(1);
    await expect(secondTodo).not.toHaveClass('completed');
    

    await page.waitForTimeout(3000);

})