import { expect, test } from "vitest";
import { Appointment } from "./appointments";

test("Create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1)
  endsAt.setDate(endsAt.getDate() + 1)

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: "John Doe ",
      startsAt,
      endsAt,
    })
  }).toThrow()
});
