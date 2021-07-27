import { Logger } from '@/core/logger';
import { createNode } from '@/core/parser/helper';
import { dropIndex, renameTable } from '@/core/parser/JSONToLiquibase';
import { LiquibaseParser } from '@/core/parser/LiquibaseParser';

import { newIndex, newTable } from './helper';

Logger.log = () => {};

describe('Export of liquibase', () => {
  const parser = new DOMParser();
  const root = parser.parseFromString('</>', 'text/xml');

  describe('renameTable', () => {
    const tableNew = newTable('new');
    const tableOld = newTable('old');

    const renameTableNode = createNode(renameTable(tableNew, tableOld), root);

    test('Tag - renameTable', () =>
      expect(renameTableNode.tagName).toBe('renameTable'));
    test('Attr - oldTableName', () =>
      expect(renameTableNode.getAttribute('oldTableName')).toBe(tableOld.name));
    test('Attr - newTableName', () =>
      expect(renameTableNode.getAttribute('newTableName')).toBe(tableNew.name));
  });

  describe('dropIndex', () => {
    const table = newTable('table');
    const index = newIndex('IDX');

    const dropIndexNode = createNode(dropIndex(table, index), root);

    test('Tag - dropIndex', () =>
      expect(dropIndexNode.tagName).toBe('dropIndex'));
    test('Attr - indexName', () =>
      expect(dropIndexNode.getAttribute('indexName')).toBe(index.name));
    test('Attr - tableName', () =>
      expect(dropIndexNode.getAttribute('tableName')).toBe(table.name));
  });
});
