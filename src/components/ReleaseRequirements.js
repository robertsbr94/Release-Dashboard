class ReleaseRequirements
{
    constructor(activeRelease)
    {
        this.systemDate = new Date();
        this.systemDateInt = parseInt(`${this.systemDate.getFullYear()}${(`0${this.systemDate.getMonth()+1}`).slice(-2)}${(`0${this.systemDate.getDate()}`).slice(-2)}`);
        this.uatDate = new Date(activeRelease.uatDate);
        this.uatDateInt = parseInt(`${this.uatDate.getFullYear()}${(`0${this.uatDate.getMonth()+1}`).slice(-2)}${(`0${this.uatDate.getDate()}`).slice(-2)}`);
        this.liveDate = new Date(activeRelease.liveDate);
        this.liveDateInt = parseInt(`${this.liveDate.getFullYear()}${(`0${this.liveDate.getMonth()+1}`).slice(-2)}${(`0${this.liveDate.getDate()}`).slice(-2)}`);

        if (this.systemDateInt < this.uatDateInt)
        {
            this.status = "Pre-UAT";
            this.requirements = ["Spec Signed Off", "Docs Developer assigned"];
            this.action = "Please chase unit leaders to ensure that these are completed ahead of the UAT date.";
        }
        else if (this.systemDateInt > this.liveDateInt)
        {
            this.status = "Post-Go-Live";
            this.requirements = ["QA or SPOE Pass", "Crucible Pass", "Documentation = 'Completed' or 'Not Required'"];
            this.action = "Please chase spec authors for documentation. Once all these fields are filled in, the tasks can be closed.";
        }
        else if (this.systemDateInt > this.liveDateInt - 7)
        {
            this.status = "Go-Live Week";
            this.requirements = ["QA or SPOE Pass", "Crucible Pass"];
            this.action = "If these fields aren't filled in by 10am on Thursday. The task should be deferred.";
        }
        else
        {
            this.status = "UAT period";
            this.requirements = ["QA or SPOE Pass", "Crucible Pass"]
            this.action = "Tasks should be signed off by QA or SPOE by one week after the UAT date.\nCrucible Reviews should be completed by the Monday before go-live."
        }

        this.message = `Current State of Release: ${this.status}\n\nThe following is required:-`;
        this.requirements.forEach(req => this.message += `\n\t${req}`);
        this.message += `\n\n${this.action}\n\nUAT Date: ${this.uatDate.toDateString()}\nLive Date: ${this.liveDate.toDateString()}`;
    }
}

module.exports = ReleaseRequirements;