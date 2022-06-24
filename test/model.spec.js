import {
  allTodos,
  createTodo,
  visibilityFilter,
  visibleTodos,
  Todo,
} from "../public/model.js";

import unexpected from "unexpected";
import unexpectedDependable from "unexpected-dependable";

const expect = unexpected.clone().use(unexpectedDependable);

describe("visibleTodos", () => {
  describe("with an empty list of todos", () => {
    beforeEach(() => {
      allTodos([]);
    });

    it("returns an empty array", () => {
      expect(visibleTodos(), "to equal", []);
    });
  });

  describe("with list of todos that is all completed", () => {
    beforeEach(() => {
      allTodos([
        new Todo({ id: 0, text: "By milk", completed: true }),
        new Todo({ id: 1, text: "Paint the fence", completed: true }),
        new Todo({ id: 2, text: "Mow the lawn", completed: true }),
      ]);
    });

    describe("and the visibility filter is active", () => {
      beforeEach(() => {
        visibilityFilter("active");
      });

      it("returns an empty array", () => {
        expect(visibleTodos(), "to equal", []);
      });
    });

    describe("and the visibility filter is completed", () => {
      beforeEach(() => {
        visibilityFilter("completed");
      });

      it("returns an array with all completed todos", () => {
        expect(visibleTodos(), "to equal", allTodos());
      });
    });
  });

  describe("with list of todos that is a mix of active and completed", () => {
    beforeEach(() => {
      allTodos([
        new Todo({ id: 0, text: "By milk", completed: true }),
        new Todo({ id: 1, text: "Paint the fence", completed: false }),
        new Todo({ id: 2, text: "Mow the lawn", completed: true }),
      ]);
    });

    describe("and the visibility filter is active", () => {
      beforeEach(() => {
        visibilityFilter("active");
      });

      it("return the active todos", () => {
        expect(visibleTodos(), "to equal", [
          new Todo({ id: 1, text: "Paint the fence", completed: false }),
        ]);
      });
    });

    describe("and the visibility filter is completed", () => {
      beforeEach(() => {
        visibilityFilter("completed");
      });

      it("returns an array with all completed todos", () => {
        expect(visibleTodos(), "to equal", [
          new Todo({ id: 0, text: "By milk", completed: true }),
          new Todo({ id: 2, text: "Mow the lawn", completed: true }),
        ]);
      });
    });

    describe("and the visibility filter is all", () => {
      beforeEach(() => {
        visibilityFilter("all");
      });

      it("returns an array with all todos", () => {
        expect(visibleTodos(), "to equal", allTodos());
      });
    });
  });
});
