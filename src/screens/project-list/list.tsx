import React from "react";
import { User } from "./search-panel";
import { Table, TableProps } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";

export interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  pin: boolean;
}
interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey={"id"}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render: (value, project) => {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      {...props}
    ></Table>
  );
};
