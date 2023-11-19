# Import the following module
from email.message import EmailMessage
from email.utils import formataddr
import smtplib, ssl
import os

# Define email addresses to use
addr_to = "ramanasrianandha@gmail.com"

# Define SMTP email server details
smtp_server = "smtp.gmail.com"
smtp_user = "arunmicheal8@gmail.com"
smtp_pass = "dlylrsedgwyzrdwu"


def sendEmail(subject, receiverEmail, name):
    msg = EmailMessage()
    msg["subject"] = subject
    msg["From"] = f"Code To earn ,{smtp_user}"

    msg["To"] = receiverEmail
    msg["BCC"] = sendEmail

    msg.set_content(
        f"""
        hi {name},
        Ihoppe hfurhfuhrufhrf
        frfrfuhruhfuhruhfurhurhufhruhfr
        frijfijrifjrijfirjijfrijfirjf
        rfrmfrmfrfrnr
        """
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", port=465) as smtp:
        smtp.login("arunmicheal8@gmail.com", "dlylrsedgwyzrdwu")
        # smtp.starttls()
        smtp.sendmail(subject, receiverEmail, msg.as_string())
if __name__ == "__main__":
    sendEmail(
        subject="Coding", 
        receiverEmail=addr_to, 
        name="Arul")
