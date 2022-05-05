/*
* quarto-inspector.js
*
* Copyright (C) 2022 RStudio, PBC
*
*/

import { Inspector } from "runtime";

export class QuartoInspector extends Inspector {
  constructor(node, cellAst) {
    super(node);
    this._cellAst = cellAst;
  }
  rejected(error) {
    return super.rejected(error);
  }
}
