import { Project } from "screens/project-list/list";
import { useEffect, useState } from "react";
import { clearObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";

export const useProject = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();
  useEffect(() => {
    run(client("projects", { data: clearObject(param || {}) }));
    // eslint-disable-next-line
  }, [param]);
  return result;
};
