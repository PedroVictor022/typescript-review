import { describe, expect, it } from "vitest";
import { Appointment } from "./appointments";
import { CreateAppointment } from "./create-appointment";

describe('Create appointment', () => {
  it('Should be able to an appointment', () => {
    const createAppointment = new CreateAppointment()

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() + 2)

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  });
});
