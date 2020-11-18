import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import { Multistepcontext } from "./FormStepContext";
import { useContext } from "react";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const FormDisplayResult = () => {
    const { submitData, userData, setStep } = useContext(Multistepcontext);
    return (
        <div className="results">
            <List >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText> FirstName:{userData.firstname}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText> LastName:{userData.lastname}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Age:{userData.age}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Email:{userData.email}</ListItemText>
                </ListItem>


                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Employee ID:{userData.emp}</ListItemText>
                </ListItem>


                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            < ContactPhoneIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Contact No:{userData.phone}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SentimentVerySatisfiedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Hobbies:{userData.hobb}</ListItemText>
                </ListItem>


                <Button variant="contained" onClick={() => setStep(3)}
                    margin="normal"
                    color="primary">Back</Button> <span></span><span></span>
                <Button variant="contained" onClick={submitData}
                    margin="normal"
                    color="secondary">Submit</Button>
            </List>
        </div>
    )
};
export default FormDisplayResult;
