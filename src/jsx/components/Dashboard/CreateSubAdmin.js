import React from "react";
import ProfileDatatable from "../table/ProfileDatatable";

export default function CreateSubAdmin() {
  return (
    <div>
      <form>
        <input type="text" className="form-control input-default" />
      </form>
      <ProfileDatatable />
    </div>
  );
}
