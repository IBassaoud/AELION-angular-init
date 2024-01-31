import { Sorter } from './sorter';

export class UserSorter extends Sorter<any> {
  private columnMapping: { [key: string]: string } = {
    name: 'lastname',
    role: 'role.label',
    // Add here more mapping if necessary for fusioned 
  };

  private lastSortedColumn: string | null = null;

  sort(users: Array<any>, column: string): Array<any> {
    if (this.lastSortedColumn === column) {
      // Toggle the sort order if the same column is clicked again
      this.ascDescOrder *= -1;
    } else {
      // Reset to ascending order for a new column
      this.ascDescOrder = 1;
    }
    // Update the last sorted column
    this.lastSortedColumn = column;

    const sortField = this.columnMapping[column] || column;

    return users.sort((a, b) => {
      let valueA = this.resolveProperty(a, sortField);
      let valueB = this.resolveProperty(b, sortField);

      if (this.isDate(valueA) && this.isDate(valueB)) {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      }

      if (valueA < valueB) return -1 * this.ascDescOrder;
      if (valueA > valueB) return 1 * this.ascDescOrder;
      return 0;
    });
  }

  private resolveProperty(obj: any, path: string): any {
    return path
      .split('.')
      .reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }
}
