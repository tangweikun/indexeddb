import { resetDatabase } from "../models/db";

export function ResetDatabaseButton() {
  return (
    <button
      className="large-button"
      onClick={() => {
        resetDatabase();
      }}
    >
      Reset Database
    </button>
  );
}
