import { IndexModel } from '@/engine/store/models/index.model';
import { TableModel } from '@/engine/store/models/table.model';
import { Index, Table } from '@@types/engine/store/table.state';

export const newTable = (name: string): Table => {
  const table = new TableModel(
    {
      addTable: { id: '', ui: { active: false, left: 0, top: 0, zIndex: 0 } },
    },
    {
      columnAutoIncrement: false,
      columnComment: false,
      columnDataType: false,
      columnDefault: false,
      columnNotNull: false,
      columnPrimaryKey: false,
      columnUnique: false,
      relationship: false,
      tableComment: false,
    }
  );
  table.name = name;
  return table;
};

export const newIndex = (name: string = ''): Index => {
  const index = new IndexModel({ addIndex: { id: '', tableId: '' } });
  index.name = name;
  return index;
};

describe('', () => {
  test('helper', () => {});
});
