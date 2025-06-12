
const { TodoItemFormatter, TodoManager } = require('./core');

describe('TodoItemFormatter', () => {
  let formatter;

  beforeEach(() => {
    formatter = new TodoItemFormatter();
  });

  test('should format task by truncating if longer than 14 characters', () => {
    const longTask = 'This is a very long task';
    expect(formatter.formatTask(longTask)).toBe('This is a very long...');
  });

  test('should not truncate task if shorter than 14 characters', () => {
    const shortTask = 'Short task';
    expect(formatter.formatTask(shortTask)).toBe('Short task');
  });

  test('should format due date with provided date', () => {
    const dueDate = '2025-06-12';
    expect(formatter.formatDueDate(dueDate)).toBe('2025-06-12');
  });

  test('should return "No due date" when date is not provided', () => {
    expect(formatter.formatDueDate()).toBe('No due date');
    expect(formatter.formatDueDate(null)).toBe('No due date');
    expect(formatter.formatDueDate('')).toBe('No due date');
  });

  test('should format status correctly', () => {
    expect(formatter.formatStatus(true)).toBe('Completed');
    expect(formatter.formatStatus(false)).toBe('Pending');
  });
});