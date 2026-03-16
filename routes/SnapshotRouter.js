import { Router } from "express";
import { authenticateToken } from "../middleware/authentication.js";
import {
  createSnapshot,
  getRouteSnapshots,
  getSnapshot,
  deleteSnapshot,
  diffSnapshots,
  updateSnapshot,
  restoreSnapshot,
} from "../controllers/SnapshotController.js";

const snapshotRouter = Router();

snapshotRouter.post("/", authenticateToken, createSnapshot);
snapshotRouter.get("/route/:routeId", authenticateToken, getRouteSnapshots);
snapshotRouter.get("/:id", authenticateToken, getSnapshot);
snapshotRouter.get("/:id/restore", authenticateToken, restoreSnapshot);
snapshotRouter.patch("/:id", authenticateToken, updateSnapshot);
snapshotRouter.delete("/:id", authenticateToken, deleteSnapshot);
snapshotRouter.post("/diff", authenticateToken, diffSnapshots);

export default snapshotRouter;
