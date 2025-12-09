import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Card
      component={Link}
      to={`/personajes/${character.id}`}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#0b0b10",
        border: "1px solid #2e2e3a",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 0 15px rgba(212,175,55,0.35)",
          borderColor: "#B343FF",
        },
      }}
    >
      <CardMedia
        component="img"
        image={character.imageUrl}
        alt={character.fullName}
        sx={{
          height: 260,
          objectFit: "cover",
          width: "100%",
        }}
      />

      <CardContent
        sx={{
          textAlign: "center",
          py: 1.5,
          flexGrow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Cinzel, serif",
            fontSize: "0.95rem",
            color: "#d4af37",
            minHeight: "2.4em",
          }}
        >
          {character.fullName}
        </Typography>
      </CardContent>
    </Card>
  );
}
