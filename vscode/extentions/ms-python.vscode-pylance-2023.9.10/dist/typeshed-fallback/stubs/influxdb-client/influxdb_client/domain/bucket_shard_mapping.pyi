from _typeshed import Incomplete

class BucketShardMapping:
    openapi_types: Incomplete
    attribute_map: Incomplete
    discriminator: Incomplete
    def __init__(self, old_id: Incomplete | None = None, new_id: Incomplete | None = None) -> None: ...
    @property
    def old_id(self): ...
    @old_id.setter
    def old_id(self, old_id) -> None: ...
    @property
    def new_id(self): ...
    @new_id.setter
    def new_id(self, new_id) -> None: ...
    def to_dict(self): ...
    def to_str(self): ...
    def __eq__(self, other): ...
    def __ne__(self, other): ...
