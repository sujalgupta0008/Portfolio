from typing import Annotated, Any
from datetime import datetime, timezone
from bson import ObjectId
from pydantic import BaseModel, BeforeValidator, ConfigDict, Field


def validate_object_id(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    if isinstance(v, str):
        return v
    raise ValueError("Invalid ObjectId")


PyObjectId = Annotated[str, BeforeValidator(validate_object_id)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True)

    id: PyObjectId = Field(default_factory=lambda: str(ObjectId()), alias="_id")

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True)
        data["_id"] = ObjectId(data["_id"])
        return data


class ContactSubmission(BaseDocument):
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str
