import { ajax } from "discourse/lib/ajax";

export default {
  actions: {
    updateSortOrder() {
      this.set("updatingSortOrder", true);

      ajax("/journal/update-sort-order", {
        type: "POST",
        data: {
          category_id: this.category.id,
        },
      })
        .then((result) => {
          let syncResultIcon = result.success ? "check" : "times";

          this.setProperties({
            updatingSortOrder: false,
            syncResultIcon,
          });
        })
        .catch(() => {
          this.setProperties({
            syncResultIcon: "times",
            updatingSortOrder: false,
          });
        })
        .finally(() => {
          setTimeout(() => {
            this.set("syncResultIcon", null);
          }, 6000);
        });
    },
    moveEntriesToComments() {
      this.set("movingEntriesToComments", true);

      ajax("/journal/move-entries-to-comments", {
        type: "POST",
        data: {
          category_id: this.category.id,
        },
      })
        .then((result) => {
          let commentSyncResultIcon = result.success ? "check" : "times";

          this.setProperties({
            movingEntriesToComments: false,
            commentSyncResultIcon,
          });
        })
        .catch(() => {
          this.setProperties({
            commentSyncResultIcon: "times",
            movingEntriesToComments: false,
          });
        })
        .finally(() => {
          setTimeout(() => {
            this.set("commentSyncResultIcon", null);
          }, 6000);
        });
    },
  },
};
