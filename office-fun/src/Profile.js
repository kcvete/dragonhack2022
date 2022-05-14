import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="centered">
      <Avatar
        className="middle"
        alt="Remy Sharp"
        src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
        sx={{ width: 180, height: 180 }}
      />

      <p className="name text-center">Matic Šincek</p>
      <p className="text-points text-center">Software developer</p>
      <div className="profile-facts">
        <div className="fact">
          <div className="fact-title">Rank</div>
          <div className="class-description">3rd this month.</div>
        </div>
        <div className="fact">
          <div className="fact-title">Points</div>
          <div className="class-description">220</div>
        </div>
        <div className="fact">
          <div className="fact-title">Redeemable points</div>
          <div className="class-description">10</div>
        </div>
      </div>
      <div className="button-container">
        <Button variant="contained">Redeem</Button>
      </div>
    </div>
  );
}
