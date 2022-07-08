import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "myFirstTable" */
  deleteMyFirstTabl?: Maybe<MyFirstTable>;
  /** delete data from the table: "myFirstTable" */
  deleteMyFirstTable?: Maybe<MyFirstTable_Mutation_Response>;
  /** insert a single row into the table: "myFirstTable" */
  insertMyFirstTabl?: Maybe<MyFirstTable>;
  /** insert data into the table: "myFirstTable" */
  insertMyFirstTable?: Maybe<MyFirstTable_Mutation_Response>;
  /** update single row of the table: "myFirstTable" */
  updateMyFirstTabl?: Maybe<MyFirstTable>;
  /** update data of the table: "myFirstTable" */
  updateMyFirstTable?: Maybe<MyFirstTable_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDeleteMyFirstTablArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteMyFirstTableArgs = {
  where: MyFirstTable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsertMyFirstTablArgs = {
  object: MyFirstTable_Insert_Input;
  on_conflict?: InputMaybe<MyFirstTable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertMyFirstTableArgs = {
  objects: Array<MyFirstTable_Insert_Input>;
  on_conflict?: InputMaybe<MyFirstTable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateMyFirstTablArgs = {
  _set?: InputMaybe<MyFirstTable_Set_Input>;
  pk_columns: MyFirstTable_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateMyFirstTableArgs = {
  _set?: InputMaybe<MyFirstTable_Set_Input>;
  where: MyFirstTable_Bool_Exp;
};

/** columns and relationships of "myFirstTable" */
export type MyFirstTable = {
  __typename?: 'myFirstTable';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  vip: Scalars['Boolean'];
};

/** aggregated selection of "myFirstTable" */
export type MyFirstTable_Aggregate = {
  __typename?: 'myFirstTable_aggregate';
  aggregate?: Maybe<MyFirstTable_Aggregate_Fields>;
  nodes: Array<MyFirstTable>;
};

/** aggregate fields of "myFirstTable" */
export type MyFirstTable_Aggregate_Fields = {
  __typename?: 'myFirstTable_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MyFirstTable_Max_Fields>;
  min?: Maybe<MyFirstTable_Min_Fields>;
};


/** aggregate fields of "myFirstTable" */
export type MyFirstTable_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "myFirstTable". All fields are combined with a logical 'AND'. */
export type MyFirstTable_Bool_Exp = {
  _and?: InputMaybe<Array<MyFirstTable_Bool_Exp>>;
  _not?: InputMaybe<MyFirstTable_Bool_Exp>;
  _or?: InputMaybe<Array<MyFirstTable_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "myFirstTable" */
export enum MyFirstTable_Constraint {
  /** unique or primary key constraint on columns "id" */
  MyFirstTablePkey = 'myFirstTable_pkey'
}

/** input type for inserting data into table "myFirstTable" */
export type MyFirstTable_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type MyFirstTable_Max_Fields = {
  __typename?: 'myFirstTable_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MyFirstTable_Min_Fields = {
  __typename?: 'myFirstTable_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "myFirstTable" */
export type MyFirstTable_Mutation_Response = {
  __typename?: 'myFirstTable_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MyFirstTable>;
};

/** on_conflict condition type for table "myFirstTable" */
export type MyFirstTable_On_Conflict = {
  constraint: MyFirstTable_Constraint;
  update_columns?: Array<MyFirstTable_Update_Column>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};

/** Ordering options when selecting data from "myFirstTable". */
export type MyFirstTable_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: myFirstTable */
export type MyFirstTable_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "myFirstTable" */
export enum MyFirstTable_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "myFirstTable" */
export type MyFirstTable_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "myFirstTable" */
export enum MyFirstTable_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "myFirstTable" using primary key columns */
  myFirstTabl?: Maybe<MyFirstTable>;
  /** fetch data from the table: "myFirstTable" */
  myFirstTable: Array<MyFirstTable>;
  /** fetch aggregated fields from the table: "myFirstTable" */
  myFirstTableAggregate: MyFirstTable_Aggregate;
};


export type Query_RootMyFirstTablArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMyFirstTableArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};


export type Query_RootMyFirstTableAggregateArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "myFirstTable" using primary key columns */
  myFirstTabl?: Maybe<MyFirstTable>;
  /** fetch data from the table: "myFirstTable" */
  myFirstTable: Array<MyFirstTable>;
  /** fetch aggregated fields from the table: "myFirstTable" */
  myFirstTableAggregate: MyFirstTable_Aggregate;
};


export type Subscription_RootMyFirstTablArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMyFirstTableArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};


export type Subscription_RootMyFirstTableAggregateArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type MyFirstTablQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type MyFirstTablQuery = { __typename?: 'query_root', myFirstTabl?: { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any, note?: string | null, vip: boolean } | null };

export type MyFirstTableQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column> | MyFirstTable_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By> | MyFirstTable_Order_By>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
}>;


export type MyFirstTableQuery = { __typename?: 'query_root', myFirstTable: Array<{ __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any, vip: boolean }> };

export type DeleteMyFirstTablMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteMyFirstTablMutation = { __typename?: 'mutation_root', deleteMyFirstTabl?: { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type DeleteMyFirstTableMutationVariables = Exact<{
  where: MyFirstTable_Bool_Exp;
}>;


export type DeleteMyFirstTableMutation = { __typename?: 'mutation_root', deleteMyFirstTable?: { __typename?: 'myFirstTable_mutation_response', returning: Array<{ __typename?: 'myFirstTable', createdAt: any, id: any, isDeleted: boolean, name: string, updatedAt: any }> } | null };

export type InsertMyFirstTablMutationVariables = Exact<{
  myFirstTable: MyFirstTable_Insert_Input;
  on_conflict?: InputMaybe<MyFirstTable_On_Conflict>;
}>;


export type InsertMyFirstTablMutation = { __typename?: 'mutation_root', insertMyFirstTabl?: { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type InsertMyFirstTableMutationVariables = Exact<{
  myFirstTable: Array<MyFirstTable_Insert_Input> | MyFirstTable_Insert_Input;
  on_conflict?: InputMaybe<MyFirstTable_On_Conflict>;
}>;


export type InsertMyFirstTableMutation = { __typename?: 'mutation_root', insertMyFirstTable?: { __typename?: 'myFirstTable_mutation_response', returning: Array<{ __typename?: 'myFirstTable', createdAt: any, id: any, isDeleted: boolean, name: string, updatedAt: any }> } | null };

export type UpdateMyFirstTablMutationVariables = Exact<{
  myFirstTable?: InputMaybe<MyFirstTable_Set_Input>;
  pk_columns: MyFirstTable_Pk_Columns_Input;
}>;


export type UpdateMyFirstTablMutation = { __typename?: 'mutation_root', updateMyFirstTabl?: { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type UpdateMyFirstTableMutationVariables = Exact<{
  myFirstTable?: InputMaybe<MyFirstTable_Set_Input>;
  where: MyFirstTable_Bool_Exp;
}>;


export type UpdateMyFirstTableMutation = { __typename?: 'mutation_root', updateMyFirstTable?: { __typename?: 'myFirstTable_mutation_response', returning: Array<{ __typename?: 'myFirstTable', createdAt: any, id: any, isDeleted: boolean, name: string, updatedAt: any }> } | null };

export type MyFirstTabl_MyFirstTableFragment = { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any, note?: string | null, vip: boolean };

export type MyFirstTable_MyFirstTableFragment = { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any, vip: boolean };

export type DeleteMyFirstTabl_MyFirstTableFragment = { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any };

export type DeleteMyFirstTable_MyFirstTable_Mutation_ResponseFragment = { __typename?: 'myFirstTable_mutation_response', returning: Array<{ __typename?: 'myFirstTable', createdAt: any, id: any, isDeleted: boolean, name: string, updatedAt: any }> };

export type InsertMyFirstTabl_MyFirstTableFragment = { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any };

export type InsertMyFirstTable_MyFirstTable_Mutation_ResponseFragment = { __typename?: 'myFirstTable_mutation_response', returning: Array<{ __typename?: 'myFirstTable', createdAt: any, id: any, isDeleted: boolean, name: string, updatedAt: any }> };

export type UpdateMyFirstTabl_MyFirstTableFragment = { __typename?: 'myFirstTable', id: any, name: string, createdAt: any, updatedAt: any };

export type UpdateMyFirstTable_MyFirstTable_Mutation_ResponseFragment = { __typename?: 'myFirstTable_mutation_response', returning: Array<{ __typename?: 'myFirstTable', createdAt: any, id: any, isDeleted: boolean, name: string, updatedAt: any }> };

export const MyFirstTabl_MyFirstTableFragmentDoc = gql`
    fragment myFirstTabl_myFirstTable on myFirstTable {
  id
  name
  createdAt
  updatedAt
  note
  vip
}
    `;
export const MyFirstTable_MyFirstTableFragmentDoc = gql`
    fragment myFirstTable_myFirstTable on myFirstTable {
  id
  name
  createdAt
  updatedAt
  vip
}
    `;
export const DeleteMyFirstTabl_MyFirstTableFragmentDoc = gql`
    fragment deleteMyFirstTabl_myFirstTable on myFirstTable {
  id
  name
  createdAt
  updatedAt
}
    `;
export const DeleteMyFirstTable_MyFirstTable_Mutation_ResponseFragmentDoc = gql`
    fragment deleteMyFirstTable_myFirstTable_mutation_response on myFirstTable_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    updatedAt
  }
}
    `;
export const InsertMyFirstTabl_MyFirstTableFragmentDoc = gql`
    fragment insertMyFirstTabl_myFirstTable on myFirstTable {
  id
  name
  createdAt
  updatedAt
}
    `;
export const InsertMyFirstTable_MyFirstTable_Mutation_ResponseFragmentDoc = gql`
    fragment insertMyFirstTable_myFirstTable_mutation_response on myFirstTable_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    updatedAt
  }
}
    `;
export const UpdateMyFirstTabl_MyFirstTableFragmentDoc = gql`
    fragment updateMyFirstTabl_myFirstTable on myFirstTable {
  id
  name
  createdAt
  updatedAt
}
    `;
export const UpdateMyFirstTable_MyFirstTable_Mutation_ResponseFragmentDoc = gql`
    fragment updateMyFirstTable_myFirstTable_mutation_response on myFirstTable_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    updatedAt
  }
}
    `;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};
export const MyFirstTablDocument = gql`
    query myFirstTabl($id: uuid!) {
  myFirstTabl(id: $id) {
    ...myFirstTabl_myFirstTable
  }
}
    ${MyFirstTabl_MyFirstTableFragmentDoc}`;

export function useMyFirstTablQuery(options: Omit<Urql.UseQueryArgs<MyFirstTablQueryVariables>, 'query'>) {
  return Urql.useQuery<MyFirstTablQuery>({ query: MyFirstTablDocument, ...options });
};
export const MyFirstTableDocument = gql`
    query myFirstTable($distinct_on: [myFirstTable_select_column!], $limit: Int, $offset: Int, $order_by: [myFirstTable_order_by!], $where: myFirstTable_bool_exp) {
  myFirstTable(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...myFirstTable_myFirstTable
  }
}
    ${MyFirstTable_MyFirstTableFragmentDoc}`;

export function useMyFirstTableQuery(options?: Omit<Urql.UseQueryArgs<MyFirstTableQueryVariables>, 'query'>) {
  return Urql.useQuery<MyFirstTableQuery>({ query: MyFirstTableDocument, ...options });
};
export const DeleteMyFirstTablDocument = gql`
    mutation deleteMyFirstTabl($id: uuid!) {
  deleteMyFirstTabl(id: $id) {
    ...deleteMyFirstTabl_myFirstTable
  }
}
    ${DeleteMyFirstTabl_MyFirstTableFragmentDoc}`;

export function useDeleteMyFirstTablMutation() {
  return Urql.useMutation<DeleteMyFirstTablMutation, DeleteMyFirstTablMutationVariables>(DeleteMyFirstTablDocument);
};
export const DeleteMyFirstTableDocument = gql`
    mutation deleteMyFirstTable($where: myFirstTable_bool_exp!) {
  deleteMyFirstTable(where: $where) {
    ...deleteMyFirstTable_myFirstTable_mutation_response
  }
}
    ${DeleteMyFirstTable_MyFirstTable_Mutation_ResponseFragmentDoc}`;

export function useDeleteMyFirstTableMutation() {
  return Urql.useMutation<DeleteMyFirstTableMutation, DeleteMyFirstTableMutationVariables>(DeleteMyFirstTableDocument);
};
export const InsertMyFirstTablDocument = gql`
    mutation insertMyFirstTabl($myFirstTable: myFirstTable_insert_input!, $on_conflict: myFirstTable_on_conflict) {
  insertMyFirstTabl(object: $myFirstTable, on_conflict: $on_conflict) {
    ...insertMyFirstTabl_myFirstTable
  }
}
    ${InsertMyFirstTabl_MyFirstTableFragmentDoc}`;

export function useInsertMyFirstTablMutation() {
  return Urql.useMutation<InsertMyFirstTablMutation, InsertMyFirstTablMutationVariables>(InsertMyFirstTablDocument);
};
export const InsertMyFirstTableDocument = gql`
    mutation insertMyFirstTable($myFirstTable: [myFirstTable_insert_input!]!, $on_conflict: myFirstTable_on_conflict) {
  insertMyFirstTable(objects: $myFirstTable, on_conflict: $on_conflict) {
    ...insertMyFirstTable_myFirstTable_mutation_response
  }
}
    ${InsertMyFirstTable_MyFirstTable_Mutation_ResponseFragmentDoc}`;

export function useInsertMyFirstTableMutation() {
  return Urql.useMutation<InsertMyFirstTableMutation, InsertMyFirstTableMutationVariables>(InsertMyFirstTableDocument);
};
export const UpdateMyFirstTablDocument = gql`
    mutation updateMyFirstTabl($myFirstTable: myFirstTable_set_input, $pk_columns: myFirstTable_pk_columns_input!) {
  updateMyFirstTabl(_set: $myFirstTable, pk_columns: $pk_columns) {
    ...updateMyFirstTabl_myFirstTable
  }
}
    ${UpdateMyFirstTabl_MyFirstTableFragmentDoc}`;

export function useUpdateMyFirstTablMutation() {
  return Urql.useMutation<UpdateMyFirstTablMutation, UpdateMyFirstTablMutationVariables>(UpdateMyFirstTablDocument);
};
export const UpdateMyFirstTableDocument = gql`
    mutation updateMyFirstTable($myFirstTable: myFirstTable_set_input, $where: myFirstTable_bool_exp!) {
  updateMyFirstTable(_set: $myFirstTable, where: $where) {
    ...updateMyFirstTable_myFirstTable_mutation_response
  }
}
    ${UpdateMyFirstTable_MyFirstTable_Mutation_ResponseFragmentDoc}`;

export function useUpdateMyFirstTableMutation() {
  return Urql.useMutation<UpdateMyFirstTableMutation, UpdateMyFirstTableMutationVariables>(UpdateMyFirstTableDocument);
};