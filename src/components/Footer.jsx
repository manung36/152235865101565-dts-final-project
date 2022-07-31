import { EggAltOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <Container
        sx={{
          paddingY: 2,
          marginTop: 10,
        }}
      >
        <Stack spacing={2}>
          <Stack spacing={2} direction="row" alignItems="center">
            {" "}
            <EggAltOutlined />
            <Typography variant="h6">Resepku</Typography>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body2">
              {" "}
              © 2022 By Harun Azis
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
