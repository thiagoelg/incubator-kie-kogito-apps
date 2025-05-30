/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

ALTER TABLE definitions ADD COLUMN metadata jsonb;

WITH grouped_metadata as (SELECT process_id, process_version, json_object_agg(name, meta_value) as v FROM definitions_metadata group by process_id, process_version)
UPDATE definitions SET metadata = v
FROM  grouped_metadata
WHERE id = grouped_metadata.process_id and version = grouped_metadata.process_version;

DROP TABLE definitions_metadata;
