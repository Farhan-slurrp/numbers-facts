import React from "react";
import { useRouter } from "next/router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { lighten } from "@material-ui/core";

export default function SimpleCard({ text, background, icon, color, route }) {
  const [hover, setHover] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${route}`);
  };

  return (
    <Card
      style={{
        minWidth: 275,
        padding: "2.3em",
        cursor: "pointer",
        background: background,
        filter: hover ? "brightness(92%)" : "",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".4em",
          padding: 0,
        }}
      >
        {icon}
        <Typography
          variant="h5"
          component="h2"
          style={{ textAlign: "center", color: color }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
