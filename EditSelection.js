/*
*  WorldEdit Addon
*  Copyright © 2022 SShobon
*  Repost or redistribution of the contents, text, images, etc. of this addon is strictly prohibited
*  If you would like to share the WorldEdit Addon, be sure to share one of these pages:
*  https://mcpedl.com/worldedit-addon-1/
*  https://link-center.net/351352/worldedit-addon
*/
import { Vector, world, MolangVariableMap, system } from "@minecraft/server";
import { WorldLogger } from "../../Create v1 (10) BP/scripts/classes";
import { EditSelection } from "./EditSelection.js";
import { world } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';

const LogError = new WorldLogger("error")

export class EditSelection {
  static players = [];

  static get(player) {
    if (this.players.map((x) => x.player.name == player.name).indexOf(true) == -1) {
      this.players.push(new EditSelection(player));
    }
    return this.players[this.players.map((x) => x.player.name == player.name).indexOf(true)];
  }

  constructor(player) {
    this.player = player;
    this.pos1 = undefined;
    this.pos2 = undefined;
  }

  getMinimum() {
    return [Math.min(this.pos1[0], this.pos2[0]), Math.min(this.pos1[1], this.pos2[1]), Math.min(this.pos1[2], this.pos2[2])];
  }

  getMaximum() {
    return [Math.max(this.pos1[0], this.pos2[0]), Math.max(this.pos1[1], this.pos2[1]), Math.max(this.pos1[2], this.pos2[2])];
  }

  pos1X(x) {
    return [x, this.pos1[1], this.pos1[2]];
  }

  pos1Y(y) {
    return [this.pos1[0], y, this.pos1[2]];
  }

  pos1Z(z) {
    return [this.pos1[0], this.pos1[1], z];
  }

  pos2X(x) {
    return [x, this.pos2[1], this.pos2[2]];
  }

  pos2Y(y) {
    return [this.pos2[0], y, this.pos2[2]];
  }

  pos2Z(z) {
    return [this.pos2[0], this.pos2[1], z];
  }

  count() {
    if (this.pos1 == undefined || this.pos2 == undefined) return;
    let x = Math.abs(this.pos1[0] - this.pos2[0]) + 1;
    let y = Math.abs(this.pos1[1] - this.pos2[1]) + 1;
    let z = Math.abs(this.pos1[2] - this.pos2[2]) + 1;
    return x * y * z;
  }

  setPos1(pos = undefined, isItem = false) {
    const player = this.player;
    if (isItem) {
      if (pos == undefined || JSON.stringify(this.pos1) == JSON.stringify([pos.x, pos.y, pos.z])) return;
      this.pos1 = [pos.x, pos.y, pos.z];
      player.runCommand("say First position set to (" + pos.x + ", " + pos.y + ", " + pos.z + ")" + (this.pos2 == undefined ? "" : " (" + this.count() + ")") + ".");
    } else {
      if (pos == undefined) {
        pos = player.location;
        pos.x = Math.floor(pos.x);
        pos.y = Math.floor(pos.y);
        pos.z = Math.floor(pos.z);
      } else {
        pos = pos.split(",");
        for (let i = 0; i < pos.length; i++) {
          if (pos[i].length == 0) {
            LogError.log("[Pos1 Error]", `For input string: "${pos[i]}", acceptable values are any block vector in the form x,y,z`, "error");
            return;
          } else {
            pos[i] = Number(pos[i]);
          }
        }
        if (pos.length != 3) {
          LogError.log("[Pos1 Error]", `Must have exactly 3 vector components, acceptable values are any block vector in the form x,y,z`, "error");
          return;
        }
      }
      pos = new Vector(pos[0], pos[1], pos[2]);
    }
    if (JSON.stringify(this.pos1) == JSON.stringify([pos.x, pos.y, pos.z])) {
      LogError.log("[Pos1 Error]", `Positions are the same!`, "error");
    } else {
      this.pos1 = [pos.x, pos.y, pos.z];
      player.runCommand("say First position set to (" + pos.x + ", " + pos.y + ", " + pos.z + ")" + (this.pos2 == undefined ? "" : " (" + this.count() + ")") + ".");
    }
  }

  setPos2(pos = undefined, isItem = false) {
    const player = this.player;
    if (isItem) {
      if (pos == undefined || JSON.stringify(this.pos2) == JSON.stringify([pos.x, pos.y, pos.z])) return;
      this.pos2 = [pos.x, pos.y, pos.z];
      player.runCommand("say Second position set to (" + pos.x + ", " + pos.y + ", " + pos.z + ")" + (this.pos1 == undefined ? "" : " (" + this.count() + ")") + ".");
    } else {
      if (pos == undefined) {
        pos = player.location;
        pos.x = Math.floor(pos.x);
        pos.y = Math.floor(pos.y);
        pos.z = Math.floor(pos.z);
      } else {
        pos = pos.split(",");
        for (let i = 0; i < pos.length; i++) {
          if (pos[i].length == 0) {
            LogError.log("[Pos2 Error]", `For input string: "${pos[i]}", acceptable values are any block vector in the form x,y,z`, "error");
            return;
          } else {
            pos[i] = Number(pos[i]);
          }
        }
        if (pos.length != 3) {
          LogError.log("[Pos2 Error]", `Must have exactly 3 vector components, acceptable values are any block vector in the form x,y,z`, "error");
          return;
        }
        pos = new Vector(pos[0], pos[1], pos[2]);
      }
      if (JSON.stringify(this.pos2) == JSON.stringify([pos.x, pos.y, pos.z])) {
        LogError.log("[Pos2 Error]", `Position already set.`, "error");
      } else {
        this.pos2 = [pos.x, pos.y, pos.z];
        player.runCommand("say Second position set to (" + pos.x + ", " + pos.y + ", " + pos.z + ")" + (this.pos1 == undefined ? "" : " (" + this.count() + ")"));
      }
    }
  }

  sel() {
    this.pos1 = undefined;
    this.pos2 = undefined;
    player.runCommand("say Selection cleared.");
  }

  renderParticles() {
    if (this.pos1 && this.pos2) {
      const min = this.getMinimum();
      const max = this.getMaximum();
      for (let x = min[0]; x <= max[0]; x++) {
        for (let y = min[1]; y <= max[1]; y++) {
          for (let z = min[2]; z <= max[2]; z++) {
            world.getDimension('minecraft:overworld').spawnParticle("minecraft:dust", new Vector(x, y, z), new MolangVariableMap());
          }
        }
      }
    }
  }

  // Call this function repeatedly to render particles 
  // between pos1 and pos2 constantly
  runInterval() {
    system.runInterval(() => {
      this.renderParticles
    })

  }

}