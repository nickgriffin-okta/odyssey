/*!
 * Copyright (c) 2024-present, Okta, Inc. and/or its affiliates. All rights reserved.
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

import { forwardRef, memo } from "react";
import { SvgIcon, type SvgIconNoChildrenProps } from "../SvgIcon.js";

export type ArrowUnsortedIconProps = SvgIconNoChildrenProps;

const ArrowUnsortedIcon = forwardRef<SVGSVGElement, ArrowUnsortedIconProps>(
  (props, ref) => {
    return (
      <SvgIcon
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 15.586V5h-2v10.586l-2.293-2.293-1.414 1.414 3.646 3.646a1.5 1.5 0 0 0 2.122 0l3.646-3.646-1.414-1.414L17 15.586ZM6.94 5.646 3.292 9.293l1.414 1.414L7 8.414V19h2V8.414l2.293 2.293 1.414-1.414-3.646-3.647a1.5 1.5 0 0 0-2.122 0Z"
            fill="currentColor"
          />
        </>
      </SvgIcon>
    );
  },
);

const MemoizedArrowUnsortedIcon = memo(ArrowUnsortedIcon);
MemoizedArrowUnsortedIcon.displayName = "ArrowUnsortedIcon";

export { MemoizedArrowUnsortedIcon as ArrowUnsortedIcon };
