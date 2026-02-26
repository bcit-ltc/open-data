import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const datasetDetails = [
  {
    id: 'audiovideoprocessed',
    title: 'AudioVideoProcessed',
    source:
      'https://community.d2l.com/brightspace/kb/articles/22812-content-service-data-sets',
    description:
      'In the Audio Video Processed Brightspace Data Set, each row represents one completed media processing job. The data set captures events from January 2022 onwards.',
    dataDescription: [
      'One row per completed media processing job.',
      'Captures events from January 2022 onwards.',
      'Activity/object identifiers for related media assets.',
      'Audit-style timestamps for processing and updates.',
    ],
    fields: [
      {
        name: 'ContentId',
        description:
          'Unique content identifier. (Type: uniqueidentifier, Size: 16, Key: PK, FK)',
      },
      {
        name: 'RevisionId',
        description:
          'Unique revision identifier. (Type: uniqueidentifier, Size: 16, Key: PK)',
      },
      {
        name: 'RevisionNumber',
        description:
          'Indicates the version of the media object that this processing job applies to. (Type: int, Size: 4)',
      },
      {
        name: 'Type',
        description:
          'Type of content for this revision: Audio or Video. (Type: nvarchar, Size: 5)',
      },
      {
        name: 'Source',
        description:
          'Location in Brightspace from which the content was added. Field can be null. (Type: nvarchar, Size: 32)',
      },
      {
        name: 'RevisionSize',
        description:
          'Size of all resources for this revision in bytes. (Type: bigint, Size: 8)',
      },
      {
        name: 'Duration',
        description: 'Duration of the revision in seconds. (Type: int, Size: 4)',
      },
      {
        name: 'RequiredTranscoding',
        description: 'True if the revision required transcoding. (Type: bit, Size: 1)',
      },
      {
        name: 'RequiredTranscribing',
        description: 'True if the revision required transcribing. (Type: bit, Size: 1)',
      },
      {
        name: 'LastModified',
        description:
          'Date this revision was last modified (UTC). (Type: datetime2, Size: 8)',
      },
    ],
  },
  {
    id: 'contentobjects',
    title: 'ContentObjects',
    source:
      'https://community.d2l.com/brightspace/kb/articles/4713-content-data-sets',
    description:
      'The Content Objects Brightspace Data Set returns information about content topics and modules created for your org units.',
    dataDescription: [
      'Content object identifiers and parent-child relationships.',
      'Org unit references and object typing.',
      'Visibility, availability, and content metadata fields.',
    ],
    fields: [
      {
        name: 'ContentObjectId',
        description:
          'Unique identifier of the content. (Type: int, Size: 4, Key: PK)',
      },
      {
        name: 'OrgUnitId',
        description: 'Unique org unit identifier. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'Title',
        description: 'Content title. (Type: nvarchar, Size: 150)',
      },
      {
        name: 'ContentObjectType',
        description: 'Content object type. (Type: varchar, Size: 6)',
      },
      {
        name: 'CompletionType',
        description: 'Content completion type. (Type: varchar, Size: 7)',
      },
      {
        name: 'ParentContentObjectId',
        description: 'Parent content object identifier. (Type: int, Size: 4)',
      },
      {
        name: 'Location',
        description:
          'Location of the content asset. Field can be null. (Type: nvarchar, Size: 1024)',
      },
      {
        name: 'StartDate',
        description:
          'Content availability start date (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'EndDate',
        description:
          'Content availability end date (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'DueDate',
        description:
          'Content availability due date (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'ObjectId1',
        description:
          'Quick link Object ID for the associated tool. Maps to DropboxId, QuizId, ChecklistId, SurveyId, ChatId, Self-AssessmentId. For Discussions, this field is used if a Forum is quicklinked. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'ObjectId2',
        description:
          'Quick link Object ID, only used for the Discussion tool if a Topic is quicklinked. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'ObjectId3',
        description:
          'Quick link Object ID, only used for the Discussion tool if a Thread is quicklinked. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'LastModified',
        description: 'Date the content was last modified (UTC). (Type: datetime2, Size: 8)',
      },
      {
        name: 'IsDeleted',
        description: 'Content is deleted. (Type: bit, Size: 1)',
      },
      {
        name: 'SortOrder',
        description: 'Display sort order used for the content objects. (Type: int, Size: 4)',
      },
      {
        name: 'Depth',
        description:
          'Indicates the number of nested hierarchical levels in the discussion post. (Type: int, Size: 4)',
      },
      {
        name: 'ToolId',
        description:
          'Unique identifier for the tool. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'IsHidden',
        description: 'Content object has not been published yet. (Type: bit, Size: 1)',
      },
      {
        name: 'ResultId',
        description:
          'Release Condition unique result identifier. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'DeletedDate',
        description:
          'Date when the content object was deleted (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'CreatedBy',
        description:
          'User who created the content object. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'LastModifiedBy',
        description:
          'User who last modified the content object. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'DeletedBy',
        description:
          'User who deleted the content object. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'AIUtilization',
        description:
          'Indicates whether D2L Lumi (Brightspace AI) capabilities were used and the level of AI involvement: 0 No AI; 1 Generated by AI and reviewed by a human; 2 Generated by AI and edited by a human; 3 Assisted or uplifted by AI; 4 Generated by AI but not yet reviewed by a human. (Type: int, Size: 4)',
      },
    ],
  },
  {
    id: 'discussionsforum',
    title: 'DiscussionsForum',
    source:
      'https://community.d2l.com/brightspace/kb/articles/4525-discussions-data-sets',
    description:
      'The Discussion Forums Brightspace Data Set returns discussion forums. Results are ordered from newest to oldest.',
    dataDescription: [
      'Forum/topic/post identifiers and hierarchy links.',
      'Author and org unit references.',
      'Creation/update metadata and status indicators.',
    ],
    fields: [
      {
        name: 'OrgUnitId',
        description: 'Unique org unit identifier. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'ForumId',
        description: 'Unique forum identifier. (Type: bigint, Size: 8, Key: PK)',
      },
      {
        name: 'Name',
        description: 'Name of the discussion forum. (Type: nvarchar, Size: 400)',
      },
      {
        name: 'Description',
        description:
          'Description of the discussion forum. Field can be null. (Type: nvarchar, Size: 1000)',
      },
      {
        name: 'MustPostToParticipate',
        description:
          'Indicates that a user must post in the discussion forum in order to participate in any discussion threads. (Type: bit, Size: 1)',
      },
      {
        name: 'AllowAnon',
        description:
          'Indicates whether there is anonymous posting permitted for the discussion forum. (Type: bit, Size: 1)',
      },
      {
        name: 'IsHidden',
        description:
          'Indicates whether the discussion forum is hidden. (Type: bit, Size: 1)',
      },
      {
        name: 'RequiresApproval',
        description:
          'Indicates that the discussion forum requires approval from a moderator before contributions to the forum are posted. (Type: bit, Size: 1)',
      },
      {
        name: 'SortOrder',
        description: 'Display sort order used for the content objects. (Type: int, Size: 4)',
      },
      {
        name: 'IsDeleted',
        description:
          'Indicates if the discussion forum is deleted. Field can be null. (Type: bit, Size: 1)',
      },
      {
        name: 'DeletedDate',
        description:
          'Date when the discussion forum was deleted (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'DeletedByUserId',
        description:
          'User who deleted the discussion forum. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'ResultId',
        description:
          'Unique release condition result identifier. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'StartDate',
        description:
          'First date when learners can post to topics in the forum (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'StartDateAvailabilityType',
        description:
          'Before the StartDate, this type determines whether learners can view or access discussion topics within the forum. Field can be null. (Type: smallint, Size: 2)',
      },
      {
        name: 'EndDate',
        description:
          'Last date when learners can post to topics in the forum (UTC). (Type: datetime2, Size: 8)',
      },
      {
        name: 'EndDateAvailabilityType',
        description:
          'After the EndDate, this type determines whether learners can view or access discussion topics within the forum. Field can be null. (Type: smallint, Size: 2)',
      },
    ],
  },
  {
    id: 'gradeobjects',
    title: 'GradeObjects',
    source: 'https://community.d2l.com/brightspace/kb/articles/4527-grades-data-sets',
    description:
      'The Grade Objects Brightspace Data Set returns a list of the grade objects created for your org units. The data set returns a NULL grade scheme value when the grade item is using the default scheme.',
    dataDescription: [
      'Grade object identifiers and org unit linkage.',
      'Grade item names, categories, and weighting rules.',
      'Points/score settings and grading lifecycle metadata.',
    ],
    fields: [
      {
        name: 'GradeObjectId',
        description: 'Unique grade object identifier. (Type: int, Size: 4, Key: PK)',
      },
      {
        name: 'OrgUnitId',
        description: 'Unique org unit identifier. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'ParentGradeObjectId',
        description:
          'Parent grade object identifier. Note: Categories are considered parent grade objects and can be resolved by joining on this field. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'Name',
        description: 'Grade object name. (Type: nvarchar, Size: 128)',
      },
      {
        name: 'TypeName',
        description: 'Grade object type name. (Type: varchar, Size: 50)',
      },
      {
        name: 'StartDate',
        description:
          'Start date for the grade object (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'EndDate',
        description:
          'End date for the grade object (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'IsAutoPointed',
        description: 'Is the grade object automatically pointed. (Type: bit, Size: 1)',
      },
      {
        name: 'IsFormula',
        description: 'Is a formula associated with the grade object. (Type: bit, Size: 1)',
      },
      {
        name: 'IsBonus',
        description: 'Is bonus grade. (Type: bit, Size: 1)',
      },
      {
        name: 'MaxPoints',
        description: 'Maximum points achievable in this grade. (Type: decimal, Size: 19, 9)',
      },
      {
        name: 'CanExceedMaxGrade',
        description: 'Can user get more than maximum points. (Type: bit, Size: 1)',
      },
      {
        name: 'ExcludeFromFinalGradeCalc',
        description: 'Is grade excluded from final grade calculation. (Type: bit, Size: 1)',
      },
      {
        name: 'GradeSchemeId',
        description:
          'Unique grade scheme identifier. Null when grade item uses the default scheme. Field can be null. (Type: bigint, Size: 8)',
      },
      {
        name: 'Weight',
        description: 'Weight associated with the grade. Field can be null. (Type: decimal, Size: 19, 9)',
      },
      {
        name: 'NumLowestGradesToDrop',
        description: 'Drop number of lowest grades from the calculated grade. (Type: int, Size: 4)',
      },
      {
        name: 'NumHighestGradesToDrop',
        description: 'Drop number of highest grades from the calculated grade. (Type: int, Size: 4)',
      },
      {
        name: 'WeightDistributionType',
        description: 'Grade weight distribution within category. Field can be null. (Type: varchar, Size: 8)',
      },
      {
        name: 'CreatedDate',
        description:
          'Date the grade was created (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'ToolName',
        description: 'Tool associated with the object. Field can be null. (Type: nvarchar, Size: 50)',
      },
      {
        name: 'AssociatedToolItemId',
        description:
          'Unique activity ID associated with the grade object (Dropbox ID, Quiz ID, Discussion ID). Field can be null. (Type: bigint, Size: 8)',
      },
      {
        name: 'LastModified',
        description: 'Last time the grade was modified (UTC). (Type: datetime2, Size: 8)',
      },
      {
        name: 'ShortName',
        description:
          'The item or category short name as per the corresponding field in Brightspace. Field can be null. (Type: nvarchar, Size: 128)',
      },
      {
        name: 'GradeObjectTypeId',
        description:
          'ID of the grade object type. Values: Numeric=1, Pass/Fail=2, Select box=3, Text=4, Calculated=5, Formula=6, Final Calculated=7, Final Adjusted=8, Category=9. (Type: int, Size: 4)',
      },
      {
        name: 'SortOrder',
        description: 'Specified sort order of grade objects. (Type: int, Size: 4)',
      },
      {
        name: 'IsDeleted',
        description: 'Indicates if the grade object is deleted. (Type: bit, Size: 1)',
      },
      {
        name: 'DeletedDate',
        description:
          'Date the grade object was soft deleted. Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'DeletedByUserId',
        description:
          'ID of the user who deleted the grade object. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'ResultId',
        description:
          'Unique release condition result identifier. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'ToolId',
        description:
          'Unique identifier of the tool associated with the object. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'Version',
        description: 'Version number of this grade object. (Type: int, Size: 4)',
      },
    ],
  },
  {
    id: 'organizationalunits',
    title: 'OrganizationalUnits',
    source:
      'https://community.d2l.com/brightspace/kb/articles/4529-organizational-units-data-sets',
    description:
      'The Organizational Units Brightspace Data Set returns details about all org units within your organization. Note: Backfill of historical IsDeleted, DeletedDate, and RecycledDate values is determined by the date/time values in the OrgUnit audit log.',
    dataDescription: [
      'Core org unit fields such as OrgUnitId, Type, Name, Code, and IsActive.',
      'Availability and lifecycle dates (StartDate, EndDate, DeletedDate, RecycledDate).',
      'Hierarchy mappings including ancestor/descendant/parent relationships.',
    ],
    fields: [
      {
        name: 'OrgUnitId',
        description: 'Unique org unit identifier. (Type: int, Size: 4, Key: PK)',
      },
      {
        name: 'Organization',
        description: 'Organization name. (Type: nvarchar, Size: 50)',
      },
      {
        name: 'Type',
        description:
          'Org unit type. For example: Group, Section, Semester, Department, etc. (Type: nvarchar, Size: 50)',
      },
      {
        name: 'Name',
        description: 'Org unit name. Field can be null. (Type: nvarchar, Size: 128)',
      },
      {
        name: 'Code',
        description: 'Org unit code. Field can be null. (Type: nvarchar, Size: 50)',
      },
      {
        name: 'StartDate',
        description:
          'Availability start date (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'EndDate',
        description:
          'Availability end date (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'IsActive',
        description: 'Is the org unit active. (Type: bit, Size: 1)',
      },
      {
        name: 'CreatedDate',
        description: 'Org unit create date. (Type: datetime2, Size: 8)',
      },
      {
        name: 'IsDeleted',
        description:
          'Indicates whether the org unit is deleted (soft deleted or recycled). Soft deleted means the org unit was deleted from the application but remains in the database. Recycled means it remains in recycle bin until permanent removal. Field can be null. (Type: bit, Size: 1)',
      },
      {
        name: 'DeletedDate',
        description:
          'Date the org unit was soft deleted. Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'RecycledDate',
        description:
          'Date the org unit was recycled. Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'Version',
        description: 'Indicates the version of the content in the row. (Type: bigint, Size: 8)',
      },
      {
        name: 'OrgUnitTypeId',
        description: 'Identifier for the org unit type. (Type: int, Size: 4)',
      },
    ],
  },
  {
    id: 'quizobjects',
    title: 'QuizObjects',
    source: 'https://community.d2l.com/brightspace/kb/articles/4532-quizzes-data-sets',
    description:
      'The Quiz Objects Brightspace Data Set returns information about the settings and properties of a quiz.',
    dataDescription: [
      'Quiz object configuration (name, dates, availability, time limits).',
      'Attempt-level records including score, completion time, and due context.',
      'Question and response-level data for evaluation and analysis.',
    ],
    fields: [
      {
        name: 'QuizId',
        description: 'Unique quiz identifier. (Type: bigint, Size: 8, Key: PK)',
      },
      {
        name: 'QuizName',
        description: 'Quiz name. (Type: nvarchar, Size: 256)',
      },
      {
        name: 'QuizDescription',
        description: 'Description of the quiz. Field can be null. (Type: nvarchar, Size: 1000)',
      },
      {
        name: 'QuizCategory',
        description:
          'Name of category quiz is assigned to. Field can be null. (Type: nvarchar, Size: 256)',
      },
      {
        name: 'IsActive',
        description: 'Indicates if the quiz is active. (Type: bit, Size: 1)',
      },
      {
        name: 'OrgUnitId',
        description:
          'Org unit identifier associated with the quiz object. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'StartDate',
        description:
          'First time the quiz is visible. Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'EndDate',
        description:
          'Last date the quiz is visible. Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'DueDate',
        description: 'Date the quiz is due (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'CreationDate',
        description: 'Date the quiz was created (UTC). (Type: datetime2, Size: 8)',
      },
      {
        name: 'CreatedBy',
        description:
          'Id of the user who created the quiz. Field can be null. (Type: bigint, Size: 8, Key: FK)',
      },
      {
        name: 'LastModified',
        description: 'Date when the quiz was last modified (UTC). (Type: datetime2, Size: 8)',
      },
      {
        name: 'LastModifiedBy',
        description:
          'Id of the user who last modified the quiz. Field can be null. (Type: bigint, Size: 8, Key: FK)',
      },
      {
        name: 'GradeObjectId',
        description:
          'Grade object identifier associated with the quiz. Field can be null. (Type: bigint, Size: 8, Key: FK)',
      },
      {
        name: 'OverallScoreCalculation',
        description:
          'Quiz score calculation method (Highest Attempt, Lowest Attempt, Average of all attempts, First Attempt, Last Attempt). Field can be null. (Type: varchar, Size: 23)',
      },
      {
        name: 'QuizScoreDenominator',
        description: 'Denominator for the quiz score. (Type: decimal, Size: 19, 9)',
      },
      {
        name: 'HasPassword',
        description:
          'Indicates if a password is required to access this quiz. Field can be null. (Type: bit, Size: 1)',
      },
      {
        name: 'IPRestricted',
        description:
          'Indicates if this quiz is available only to certain IP Addresses. Field can be null. (Type: bit, Size: 1)',
      },
      {
        name: 'TimeLimit',
        description: 'Time limit for the quiz in minutes. (Type: int, Size: 4)',
      },
      {
        name: 'TimeLimitEnforced',
        description: 'Indicates if the time limit assigned to the quiz is enforced. (Type: bit, Size: 1)',
      },
      {
        name: 'AttemptsAllowed',
        description:
          'Number of times learners are permitted to attempt the quiz. Null indicates unlimited attempts. (Type: int, Size: 4)',
      },
      {
        name: 'PreventMovingBackwards',
        description:
          'Indicates if learners are permitted to move to previous pages in the quiz. (Type: bit, Size: 1)',
      },
      {
        name: 'AllowHints',
        description: 'Indicates that there are hints allowed for the quiz. (Type: bit, Size: 1)',
      },
      {
        name: 'NotificationEmail',
        description:
          'Indicates that there is a notification email for this quiz if present. Field can be null. (Type: nvarchar, Size: 1000)',
      },
      {
        name: 'DisablePagerAccess',
        description: 'Indicates that learners cannot access the pager functionality. (Type: bit, Size: 1)',
      },
      {
        name: 'DisplayInCalendar',
        description:
          'Indicates if the quiz is displayed in the Calendar. Field can be null. (Type: bit, Size: 1)',
      },
      {
        name: 'IsAttemptRldb',
        description:
          'Indicates if Respondus LockDown Browser is required to attempt this quiz. (Type: bit, Size: 1)',
      },
      {
        name: 'IsSubviewRldb',
        description:
          'Indicates if Respondus LockDown Browser is required to see quiz results (submission view). (Type: bit, Size: 1)',
      },
      {
        name: 'SortOrder',
        description: 'Display sort order for quizzes (when not alphabetical). (Type: int, Size: 4)',
      },
      {
        name: 'CategoryId',
        description:
          'Unique category identifier for the quiz. Field can be null. (Type: bigint, Size: 8)',
      },
      {
        name: 'ResultId',
        description:
          'Unique release condition result identifier. Field can be null. (Type: bigint, Size: 8, Key: FK)',
      },
      {
        name: 'IsRetakeIncorrectOnly',
        description: 'Indicates if the quiz allows Retake Incorrect Only. (Type: bit, Size: 1)',
      },
      {
        name: 'PagingTypeId',
        description:
          'Exposes page break information. Values: NULL=Classic Quiz Creation paging, 0=All questions on one page, 1=One question per page, 2=Page breaks after each section, 3=5 questions per page, 4=10 questions per page. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'IsSynchronous',
        description:
          "Indicates that a quiz is synchronous. A synchronous quiz's timer starts on the start date. (Type: bit, Size: 1)",
      },
      {
        name: 'DeductionPercentage',
        description:
          "The percentage of a question's point value deducted from the quiz attempt score if answered incorrectly. Field can be null. (Type: int, Size: 4)",
      },
      {
        name: 'AIStudySupport',
        description: 'Indicates if D2L Lumi Study Support is enabled for the quiz. (Type: bit, Size: 1)',
      },
      {
        name: 'HideQuestionPoints',
        description: 'Indicates that the quiz has Hide Question Points enabled. (Type: bit, Size: 1)',
      },
      {
        name: 'IsSingleSession',
        description:
          'Indicates that the quiz is using the Single Brightspace Login Session restriction option. Field can be null. (Type: bit, Size: 1)',
      },
    ],
  },
  {
    id: 'releaseconditionsobjects',
    title: 'ReleaseConditionsObjects',
    source:
      'https://community.d2l.com/brightspace/kb/articles/4533-release-conditions-data-sets',
    description:
      'The Release Condition Objects Brightspace Data Set returns all the release conditions (prerequisites and results) that have been created in the organization.',
    dataDescription: [
      'Condition object identifiers and related tool/object mappings.',
      'Rule expression structure using All/Any operators and operands.',
      'Join keys (for example Id1/Id2) used to connect with activity datasets.',
    ],
    fields: [
      {
        name: 'PreRequisiteId',
        description: 'Unique pre-requisite identifier. (Type: int, Size: 4, Key: PK, FK)',
      },
      {
        name: 'ResultId',
        description: 'Unique result identifier. (Type: int, Size: 4, Key: PK)',
      },
      {
        name: 'OrgUnitId',
        description: 'Unique organization identifier. (Type: int, Size: 4, Key: PK, FK)',
      },
      {
        name: 'Name',
        description: 'Pre-requisite condition name. (Type: varchar, Size: 64)',
      },
      {
        name: 'IsNegativeCondition',
        description:
          'Indicates if the condition relies on something not happening. (Type: bit, Size: 1)',
      },
      {
        name: 'PreRequisiteToolId',
        description: 'Unique pre-requisite tool identifier. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'Id1',
        description:
          'Unique identifier for the pre-requisite tool. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'Id2',
        description:
          'Secondary unique identifier for the pre-requisite tool when needed. Field can be null. (Type: int, Size: 4)',
      },
      {
        name: 'ResultToolId',
        description: 'Unique identifier for the result tool. (Type: int, Size: 4, Key: FK)',
      },
      {
        name: 'UsesPercentage',
        description: 'Indicates if the pre-requisite is looking at a grade percentage. (Type: bit, Size: 1)',
      },
      {
        name: 'OperatorTypeDesc',
        description:
          'Defines whether all or any of the pre-requisites need to be met. Field can be null. (Type: varchar, Size: 3)',
      },
      {
        name: 'Version',
        description:
          'Indicates the version of the row. Used to determine which table row occurred first, similar to timestamps in other datasets. (Type: bigint, Size: 8)',
      },
      {
        name: 'Guid1',
        description:
          'Unique identifier for the pre-requisite tool. For Outcome-based release condition objects, this matches the ObjectId of the outcome. Field can be null. (Type: uniqueidentifier, Size: 16)',
      },
      {
        name: 'Guid2',
        description:
          'Unique identifier for the pre-requisite tool. For Outcome-based release condition objects, this matches the ScaleLevelId of the outcome. Field can be null. (Type: uniqueidentifier, Size: 16)',
      },
    ],
  },
  {
    id: 'roledetails',
    title: 'RoleDetails',
    source:
      'https://community.d2l.com/brightspace/kb/articles/4534-role-details-data-sets',
    description:
      'The Role Details Brightspace Data Set returns a full set of attributes for each role in your organization.',
    dataDescription: [
      'Role identifiers and role naming metadata.',
      'Role behavior flags used across product areas.',
      'Content-visibility indicators such as ShowInContent.',
    ],
    fields: [
      {
        name: 'RoleId',
        description: 'Unique role identifier. (Type: int, Size: 4, Key: PK)',
      },
      {
        name: 'RoleName',
        description: 'Name of the role. (Type: nvarchar, Size: 120)',
      },
      {
        name: 'Description',
        description: 'Description of the role. Field can be null. (Type: nvarchar, Size: 400)',
      },
      {
        name: 'IsCascading',
        description: 'Attribute indicating that the role cascades from other roles. (Type: bit, Size: 1)',
      },
      {
        name: 'InClassList',
        description: 'Attribute indicating that users with this role appear in class lists. (Type: bit, Size: 1)',
      },
      {
        name: 'ClassListRoleName',
        description:
          'Attribute indicating the role name for users that appear in class lists. Field can be null. (Type: nvarchar, Size: 120)',
      },
      {
        name: 'ClassListShowGroups',
        description:
          'Attribute indicating that members of this role can see groups consisting of learners in the class list. (Type: bit, Size: 1)',
      },
      {
        name: 'ClassListShowSections',
        description:
          'Attribute indicating that members of this role can see sections consisting of learners in the class list. (Type: bit, Size: 1)',
      },
      {
        name: 'ClassListDisplayRole',
        description:
          'Attribute indicating that members of this role appear in the class list with the role displayed. (Type: bit, Size: 1)',
      },
      {
        name: 'AccessInactiveCO',
        description: 'Attribute indicating that the role can access inactive course offerings. (Type: bit, Size: 1)',
      },
      {
        name: 'HasSpecialAccess',
        description: 'Attribute indicating that the role has special access to courses. (Type: bit, Size: 1)',
      },
      {
        name: 'AddToCourseOfferingGroups',
        description: 'Attribute indicating that the role appears in the course offering group. (Type: bit, Size: 1)',
      },
      {
        name: 'CanBeAutoEnrolledIntoGroups',
        description:
          'Attribute indicating that the role can be automatically enrolled into groups in a class. (Type: bit, Size: 1)',
      },
      {
        name: 'AddToCourseOfferingSections',
        description:
          'Attribute indicating that users with this role can be added to course offering sections. (Type: bit, Size: 1)',
      },
      {
        name: 'CanBeAutoEnrolledIntoSections',
        description:
          'Attribute indicating that users with this role can be automatically enrolled into course sections. (Type: bit, Size: 1)',
      },
      {
        name: 'AccessPastCourses',
        description: 'Attribute indicating that this role can access past courses. (Type: bit, Size: 1)',
      },
      {
        name: 'AccessFutureCourses',
        description:
          'Attribute indicating that this role can access courses that have not yet started. (Type: bit, Size: 1)',
      },
      {
        name: 'SortOrder',
        description: 'Indicates the sort order for users with this role. (Type: int, Size: 4)',
      },
      {
        name: 'ShowInContent',
        description: 'Indicates that this role should appear in Content. (Type: bit, Size: 1)',
      },
      {
        name: 'ShowInDiscussionAssess',
        description: 'Indicates that this role should appear in Discussions assessments. (Type: bit, Size: 1)',
      },
      {
        name: 'ShowInDiscussionStats',
        description: 'Indicates that this role should appear in Discussions statistics. (Type: bit, Size: 1)',
      },
      {
        name: 'ShowInGrades',
        description: 'Indicates that this role should appear in Grades. (Type: bit, Size: 1)',
      },
      {
        name: 'ShowInAttendance',
        description: 'Indicates that this role should appear in Attendance. (Type: bit, Size: 1)',
      },
      {
        name: 'AllowSelfEnrollInGroups',
        description: 'Indicates that this role should have permission to self-enroll in groups. (Type: bit, Size: 1)',
      },
      {
        name: 'ShowInRegistration',
        description:
          'Indicates that this role should appear in registration information for a course. (Type: bit, Size: 1)',
      },
      {
        name: 'ShowInUserProgress',
        description: 'Indicates that this role should appear in User Progress. (Type: bit, Size: 1)',
      },
      {
        name: 'RoleAlias',
        description: 'Indicates the alias for this role. Field can be null. (Type: nvarchar, Size: 120)',
      },
      {
        name: 'RoleCode',
        description:
          'Code assigned to each role for mapping to other systems or organizations. Field can be null. (Type: nvarchar, Size: 100)',
      },
      {
        name: 'LastModifiedDate',
        description:
          'Date and time when the role was last modified (UTC). Field can be null. (Type: datetime2, Size: 8)',
      },
      {
        name: 'DeletedBy',
        description:
          'User identifier of the user that deleted the role. Field can be null. (Type: int, Size: 4, Key: FK)',
      },
    ],
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Open data portal describing Brightspace datasets for research and analysis.">
      <main>
        <section className="portal-hero">
          <div className="container">
            <p className="portal-eyebrow">Open Dataset</p>
            <Heading as="h1" className="portal-hero__title">
              {siteConfig.title}
            </Heading>
            <p className="portal-hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </section>

        <section id="about" className="portal-section">
          <div className="container">
            <div>
              <Heading as="h2">About</Heading>
              <p>
                This portal will publish an open, privacy-safe version of key
                Brightspace datasets for learning analytics research,
                experimentation, and reporting.
              </p>
              <p>
                The data listed below is currently documented from Brightspace
                source documentation. Before public release, private information
                will be removed from the published extracts.
              </p>
            </div>
          </div>
        </section>

        <section id="datasets" className="portal-section portal-section--alt">
          <div className="container">
            <Heading as="h2">Data sets and data descriptions</Heading>
            <p>
              Each dataset below includes a short description and a practical
              data description summary. The source link points to the official
              Brightspace documentation page used for reference.
            </p>
            <div className="portal-card-grid portal-card-grid--single">
              {datasetDetails.map((dataset) => (
                <div key={dataset.id} className="portal-card">
                  <Heading as="h3">{dataset.title}</Heading>
                  <p>{dataset.description}</p>
                  <p className="portal-card__meta">Data description</p>
                  <ul>
                    {dataset.dataDescription.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="portal-card__meta">Field descriptions</p>
                  <ul>
                    {dataset.fields.map((field) => (
                      <li key={field.name}>
                        <strong>{field.name}:</strong> {field.description}
                      </li>
                    ))}
                  </ul>
                  <p className="portal-inline-link">
                    <Link to={dataset.source}>Source documentation</Link>
                  </p>
                  <div className="portal-button-row">
                    <Link
                      className="button button--primary button--sm"
                      to={`pathname:///downloads/${dataset.id}.csv`}>
                      Download {dataset.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
