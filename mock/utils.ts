export interface RequestParams {
    methods: string;
    body: any;
    headers?: { authorization?: string };
    query: any;
}
