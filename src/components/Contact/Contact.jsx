import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "styled-components";

const BoxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  background-color: #eee8e8;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 8px;
  @media screen and (max-width: 500px) and (min-width: 0px) {
    width: 80%;

  }
`;
const PhoneNumber = styled.a`
  text-decoration: none;
  @media screen and (max-width: 500px) and (min-width: 0px) {
    font-size: 18px;
  }
`;
const Telegram = styled.a`
  text-decoration: none;
  @media screen and (max-width: 500px) and (min-width: 0px) {
    font-size: 22px;
  }
`;

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={!props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContent>
          <Box>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 3, fontSize: "25px", fontWeight: "700" }}
            >
              CONTACT US
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 3, fontSize: "18px", fontWeight: "300" }}
            >
              Contact us by telegram or phone!
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                mt: 6,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                height: "50px",
                width: "100%",
              }}
            >
              <TelegramIcon
                sx={{
                  color: "rgb(246, 248, 250)",
                  fontSize: 50,
                  mr: 3,
                  fontWeight: "600",
                  p: "3px",
                  backgroundColor: "rgb(4, 129, 192)",
                  borderRadius: "7px",
                }}
              />
              <Telegram
                href="https://t.me/jduniversity_uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </Telegram>
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{
                mt: 3,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                height: "50px",
                width: "100%",
              }}
            >
              <PhoneIcon
                sx={{
                  color: "#fafafa",
                  mr: 3,
                  fontSize: 50,
                  p: "3px",
                  backgroundColor: "rgb(14, 199, 38)",
                  borderRadius: "7px",
                }}
              />
              <PhoneNumber
                href="tel:+998712000595"
              >
                +998 (71) 200-05-95
              </PhoneNumber>
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              sx={{
                mt: 10,
                fontWeight: "300",
                typography: { sm: "body1", xs: "body2" },
              }}
            >
              Japan Digital University
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 1, fontSize: "18px", fontWeight: "300" }}
            >
              <a
                href="https://jdu.uz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jdu.uz
              </a>
            </Typography>
          </Box>
        </BoxContent>
      </Modal>
    </div>
  );
}
