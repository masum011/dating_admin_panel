import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import {
  Checkbox,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "814px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

export default function ContentMgModal({ isOpen, isClose }) {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const {  handleSubmit, getValues } = useForm({
    defaultValues: {
      firstName: "Grace",
      lastName: "Hopper",
      username: "GrandmaCOBOL",
    },
  });
  const onSubmit = (data) => {
    console.log(getValues(data));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={isClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className="flex justify-between pb-3">
              <h2 className="text-[24px]">Add Notification</h2>
              <CloseIcon
                fontSize="large"
                onClick={isClose}
                className="cursor-pointer"
              />
            </div>
            <Divider />
            <div className="modal-btn mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="btncolor"
                  type="text"
                  placeholder="Campaign name"
                />
                <br />
                <textarea
                  className="w3review my-4 w-full"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Describe something about the campaign"
                />
                <div className="upload-picture mb-4">
                  <input type="file" name="masum" />
                </div>
                <input
                  className="btncolor w-full"
                  placeholder="Tap Link"
                  type="text"
                />
                <Checkbox checked={checked} onChange={handleChange} />
                <label>Recurring Notification</label>
                {checked ? (
                  <>
                    <div className="flex gap-8 py-8">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange1}
                          size="small"
                          className="w-[100%]"
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange1}
                          size="small"
                          className="w-[100%]"
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flex gap-8">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange1}
                          size="small"
                          className="w-[100%]"
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange1}
                          size="small"
                          className="w-[100%]"
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="modal-btn-section flex justify-end gap-4 mt-8">
                  <Button
                    variant="outlined"
                    onClick={isClose}
                    id="modal-btn"
                    sx={{
                      color: "#979797",
                      border: "1px solid #DBDBDB",
                      height: "45px",
                    }}
                  >
                    Discard
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    color="warning"
                    id="modal-btn"
                    sx={{ backgroundColor: "#FF6B6B", height: "45px" }}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
