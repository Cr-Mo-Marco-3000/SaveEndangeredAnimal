package com.sea.domain.user.request;

import java.util.Arrays;

import lombok.Getter;

@Getter
public class UserUpdateTestResultPutReq  {
    String[] list;

	@Override
	public String toString() {
		return "UserUpdateTestResultPutReq [list=" + Arrays.toString(list) + "]";
	}
}
