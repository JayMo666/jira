import { useEffect } from "react";
import { clearObject } from "utils";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { User } from "screens/project-list/search-panel";

export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();
  useEffect(() => {
    run(client("users", { data: clearObject(param || {}) }));
    // eslint-disable-next-line
  }, [param]);
  return result;
};
