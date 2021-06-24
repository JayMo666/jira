import React from "react";
import { User } from "./search-panel";
import { Table, TableProps } from "antd";
import { Link } from "react-router-dom";

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
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
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
