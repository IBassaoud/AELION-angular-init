export abstract class Sorter<T> {
    protected ascDescOrder = 1; // 1 for ascending, -1 for descending

    abstract sort(items: Array<T>, sortKey: string): Array<T>;

    toggleSortOrder(): void {
        this.ascDescOrder *= -1;
    }

    protected isDate(value: any): boolean {
        return !isNaN(Date.parse(value));
    }
}