# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1:

### Review Schema of Facilities, Agents and Shifts Table
#### Description
We need to add ability for facilities to save their id with agent to generate report against agent they work with in certain shift.
#### Acceptance Criteria
Understanding of current DB tables schema and understanding of logic in working of `getShiftsByFacility` function
#### Estimates
4 hours (1 Point)
#### Implementation
We need to read database models to understand the schema and relationship between tables facilities, agents and shifts.
We need to understand about the metadata which is included in 'getShiftsByFacility' for better understanding of next implementation.


### Ticket 2:

### Create a table in database named `ShiftFacilityAgent` where we will store information against shift, facility and agent.
#### Description
We need to add ability for facilities to save their id with agent to generate report against agent they work with in certain shift.
#### Acceptance Criteria
A Database Table containing logic of composite key where we will be able to store the information upon each shift start against any agent for each facility.
#### Estimates
12 hours (3 Points)
#### Implementation
Best and optimized way will be using of composite key in `ShiftFacilityAgent` table. It will be used to identify all the agent that are in the shift uniquely against each row. 
Each row is combination of over one column and can identify a shift in a certain facility worked by an agent. 
Upon each shift start we will be inserting data to `ShiftFacilityAgent` table which contains ids of facility, shift, agent and current datetime.

### Ticket 3:

### Report generation against agent based on shifts in facility
#### Description
We need to generate report against Agent worked in client Facilities in a given quarter by summing up every Shift they worked.
#### Acceptance Criteria
A report containing each agent record against any facility which includes number of hours worked by an agent in quarter.
#### Estimates
20 hours (5 Points)
#### Implementation
We need to introduce a function `getAgentByFacility` which will be responsible of fetch information based in 
We will be fetching all entries in `ShiftFacilityAgent` table.
On each entry we will have a reference of each agent in that shift we will be fetching agent and shift information, we will be getiing number of hours each agent worked.
Upon adding all entriesagainst each agents, We will be exporting all to a PDF report against each agent and facility.
