/*!
 * Copyright (c) 2023-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { readdir, writeFile } from "node:fs/promises";
import { extname, basename } from "node:path";

const currentYear = new Date().getFullYear();

export const headerCopyrightLicense = `/*!
 * Copyright (c) ${currentYear}-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// Code automatically generated; DO NOT EDIT.

`;

readdir("./src/icons.generated")
  .then((filenames) =>
    headerCopyrightLicense.concat(
      filenames
        .map((filename) => basename(filename, extname(filename)))
        .map((filename) => `export * from "./${filename}.js";`)
        .join("\n"),
    ),
  )
  .then((content) => writeFile("./src/icons.generated/index.ts", content))
  .then(() => {
    console.info("Completed writing index file.");
  })
  .catch((error) => {
    console.error(error);
  });
