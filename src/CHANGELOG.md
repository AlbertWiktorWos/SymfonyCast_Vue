# API Platform 3 Part 3: Custom Resources
## [05.02.2025]
- Simpler Validator for Checking State Change
- Writable Collection via the PropertyAccessor
- Writing to a Collection Relation
- Writable Relation Fields
## [05.02.2025]
- Triggering a "Publish"
- Field Security with Patch
- DTO & Security
- Making DragonTreasureApi Writable
- Dtos, Mapping & Max Depth of Relations (fixing circular reference mapping issue)
- [BREAK] Changing DragonTreasure API Resource to DragonTreasure Class Dto! (Removing AdminGroupsContextBuilder, AddOwnerGroupsNormalizer, DragonTreasureStateProcessor, DragonTreasureStateProvider)
- Reusable Entity->Dto Provider & Processor (EntityClassDtoStateProcessor + EntityToDtoStateProvider)
- MicroMapper: Central DTO Mapping (symfonycasts/micro-mapper) two mappers: UserApi <-> User Entity
- Simple DTO Validation & Security
- Other Conditional Field Strategies
## [04.02.2025]
- Controlling Fields without Groups
- Leveraging the Core Processor
- DTO to Entity State Processor
- Fix for DTO single Item State Provider
- Provider: Transforming Entities to DTOs
- Entities, DTO's & The "Central" Object (creating Provider for UserApi resource)
- stateOptions + entityClass Magic
- [BREAK] Changing User API Resource to User Class Dto! (Removing UserHashPasswordProcessor)
- Pagination on a Custom Resource
- Embedding Custom DTO's
- Relating Custom ApiResources
- Custom Resource State Processor (DailyQuest + test)
- Custom Resource Item Provider
- Using a Custom (Date) Identifier
- Totally Custom Resource DailyQuest with Provider
- Running Code "On Publish" via processor (DragonTreasurePublishProcessor)
- Simpler State Processor (changed DragonTreasureSetOwnerProcessor to DragonTreasureStateProcessor)
## [03.02.2025]
- Decorating the CollectionProvider (DragonTreasureStateProvider + fix in DragonTreasureSetOwnerProcessor)
- Decorating the Core State Provider (DragonTreasureStateProvider)
- State Providers, Processors & a Custom Field (remove isMine from AdOwnerGroupsNormalizer and added new field isMine to entity)
- Merging changes from the beginning of the course part 3 (Notification entity)
# API Platform 3 Part 2: Security for your Treasures
## [30.01.2025]
- Filtering Relation Collection
- Query Extension: Auto-Filter a Collection and Single Item (IsPublished)
- Auto Setting the "owner"
- Custom Validator and validating how Values Change
- Totally Custom Fields (isMine)
## [29.01.2025]
- Normalizer Decoration & "Normalizer Aware"**
- Custom Normalizer
- Dynamic Groups: Context Builder
- Validation Groups & Patch Formats
- State Processors: Hashing the User Password (decorator usage in comments)
- User Test + Plain Password
- Conditional Fields by User: ApiProperty
- Security Voter
- Allow Admin Users to Edit any Treasure
- Only Allow Owners to Edit
- Setting new PUT Behavior in config
- Testing Token Authentication
- Fixing Factories
## [28.01.2025]
- Customizing Browser Globally (force headers for api calls in the api platform browser tests)
- Test with Authentication
- Simple API testing with JSON assertions
- Configuration for testing with small test
## [26.01.2025]
- Deny Access with The "security" Option
- API Token Scopes (map api token scopes to roles)
- Customizing the OpenAPI Docs
- Access Token Authenticator
- Generating the API Token & Fixtures
- The ApiToken Entity
- Passing Values to Stimulus
- Logout & Passing API Data to JavaScript
- On Authentication Success
## [22.01.2025]
- Handling Authentication Errors (with small fix to react admin in twig and api formats)
## [21.01.2025]
- API Login Form with json_login
- How to disable docs
- Adding phpstan/phpstan and friendsofphp/php-cs-fixer - look at README.md for usage
- Removing ignore vendor folder from php volumes
## [15.01.2025]
- Merging changes from the beginning of the course part 2 (vue front login-page)
# API Platform 3 Part 1: Mythically Good RESTful APIs
## [15.01.2025]
- Adding React Admin (template + assets with installing encore + symfony/ux-react)
- npm, node, yarn added to php container
## [14.01.2025]
- Subresources
- Filtering on Relations
- Removing Items from a Collection
- Creating Embedded Objects ( cascade: persist )
- Adding Items to a Collection Property
- Embedded Write Relations (manipulate User by DragonTreasure api request)
- Embedded Relations (get DragonTreasure from User in api response)
- Relating Resources: User <-> DragonTreasure
- User Entity with api-resource
- Validation
- Opcache configuration for PHP-FPM
## [12.01.2025]
- Formats: HAL & CSV
- More Formats: HAL & CSV
- PropertyFilter: Sparse Fieldsets
- Filters: Searching Results
- Pagination & Foundry Fixtures
- Serialization Group with Serialization Tricks
## [14.05.2023]
- **Increasing performance of containers**
- The Serializer
- Operations / Endpoints
## [07.05.2023]
- **XDebug extension in php container**
- API Debugging with the Profiler
- Hydra: Describing API Classes, Operations & More
- JSON-LD: Giving Meaning to your Data
- The Powerful OpenAPI Spec
- Swagger UI: Interactive Docs
## [02.05.2023]
- Creating your First ApiResource
- **Config of connection to the database**
- Installing API Platform
- **First configuration for new symfony 6.2 project with PHP 8.2, Nginx and MySql containers on docker**