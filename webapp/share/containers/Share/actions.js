/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import {
  LOAD_SHARE_DASHBOARD,
  LOAD_SHARE_DASHBOARD_SUCCESS,
  LOAD_SHARE_WIDGET,
  LOAD_SHARE_WIDGET_SUCCESS,
  LOAD_SHARE_RESULTSET,
  LOAD_SHARE_RESULTSET_SUCCESS,
  SET_INDIVIDUAL_DASHBOARD,
  LOAD_WIDGET_CSV,
  LOAD_WIDGET_CSV_SUCCESS,
  LOAD_WIDGET_CSV_FAILURE
} from './constants'

export function getDashboard (token, resolve, reject) {
  return {
    type: LOAD_SHARE_DASHBOARD,
    payload: {
      token,
      resolve,
      reject
    }
  }
}

export function dashboardGetted (dashboard) {
  return {
    type: LOAD_SHARE_DASHBOARD_SUCCESS,
    payload: {
      dashboard
    }
  }
}

export function getWidget (token, resolve, reject) {
  return {
    type: LOAD_SHARE_WIDGET,
    payload: {
      token,
      resolve,
      reject
    }
  }
}

export function widgetGetted (widget) {
  return {
    type: LOAD_SHARE_WIDGET_SUCCESS,
    payload: {
      widget
    }
  }
}

export function getResultset (itemId, token, sql, sorts, offset, limit, useCache, expired) {
  return {
    type: LOAD_SHARE_RESULTSET,
    payload: {
      itemId,
      token,
      sql,
      sorts,
      offset,
      limit,
      useCache,
      expired
    }
  }
}

export function resultsetGetted (itemId, resultset) {
  return {
    type: LOAD_SHARE_RESULTSET_SUCCESS,
    payload: {
      itemId,
      resultset
    }
  }
}

export function setIndividualDashboard (widgetId, token) {
  return {
    type: SET_INDIVIDUAL_DASHBOARD,
    payload: {
      widgetId,
      token
    }
  }
}

export function loadWidgetCsv (itemId, token, sql, sorts, offset, limit) {
  return {
    type: LOAD_WIDGET_CSV,
    payload: {
      itemId,
      token,
      sql,
      sorts,
      offset,
      limit
    }
  }
}

export function widgetCsvLoaded (itemId) {
  return {
    type: LOAD_WIDGET_CSV_SUCCESS,
    payload: {
      itemId
    }
  }
}

export function loadWidgetCsvFail (itemId) {
  return {
    type: LOAD_WIDGET_CSV_FAILURE,
    payload: {
      itemId
    }
  }
}
