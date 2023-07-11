const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });


export interface Table {
    __table__: string
}

export type RecordId = string

export interface Record<T extends Table> {
    id: RecordId,
    fields: T
    createdTime: string,
}

export class AirtableSDK<T extends Table> {
    table: any;

    constructor(table: string) {
        this.table = table
    }

    async retrieve(id: RecordId): Promise<Record<T>> {
        let record: Record<T> = await lib.airtable.query['@1.0.0'].records.retrieve({
            baseId: process.env.AIRTABLE_BASE_ID,
            table: this.table,
            id: id,
        });
        return record
    }

    async list(params: { formula?: string, sort?: sort } = {}): Promise<Record<T>[]> {
        let result = await lib.airtable.query['@1.0.0'].records.find.formula({
            baseId: process.env.AIRTABLE_BASE_ID,
            table: this.table,
            ...params
        })

        return result
    }
}

export type sort = Array<{ field: string, direction: 'asc' | 'desc' }>
