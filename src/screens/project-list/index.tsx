import React from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";

import { useState } from "react";
import { useDebounce } from "utils";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { Typography } from "antd";
import { ButtonNoPadding, Row, ScreenContainer } from "components/lib";
import { useUrlQueryParam } from "utils/url";
import { useProjectsSearchParams } from "./util";
import { projectListActions } from "./project-list-slice";
import { useDispatch } from "react-redux";

export const ProjectListScreen = () => {
  // const { open } = useProjectModal();
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();
  const dispatch = useDispatch();

  return (
    <ScreenContainer>
      <Row marginBottom={2} between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding
          onClick={() => {
            dispatch(projectListActions.openProjectModal());
          }}
          type={"link"}
        >
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users || []}
      ></SearchPanel>
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      ></List>
    </ScreenContainer>
  );
};
ProjectListScreen.whyDidYouRender = true;
