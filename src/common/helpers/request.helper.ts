import { PaginationParamsDto } from '../dto';


 const formatFilters = (stringFilters: string) => {
    const objFilters = JSON.parse(stringFilters);
    const filtersValues = Object.values(objFilters)
    const noNullFiltersValues = filtersValues.filter(value => value);
    if (noNullFiltersValues.length === 0) return null;
    const filtersKeys = Object.keys(objFilters);

    const filters = {};
    for (let index = 0; index < filtersKeys.length; index++) {
        const key = filtersKeys[index];
        const value = filtersValues[index];
        if (value) filters[key] = value;
    };
    return filters;
};

export const formatPaginationParams = (
    defaultLimit: number,
    paginationParams: PaginationParamsDto
) => {
    const filters = formatFilters(paginationParams.filters);
    const limit = paginationParams.limit ?? defaultLimit;
    const page = paginationParams.page ?? 1;

    const params = { filters, limit, page };
    return params
};