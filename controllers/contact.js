import Contact from "../models/Contact.js";
import Note from "../models/Note.js";

export const createContact = async (req, res, next) => {
  const newContact = new Contact(req.body);

  try {
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);
  } catch (err) {
    next(err);
  }
};
export const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedContact);
  } catch (err) {
    next(err);
  }
};
export const deleteContact = async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};
export const getContacts = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const contacts = await Contact.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Contact.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const contactCount = await Contact.countDocuments({ type: "contact" });
    const apartmentCount = await Contact.countDocuments({ type: "apartment" });
    const resortCount = await Contact.countDocuments({ type: "resort" });
    const villaCount = await Contact.countDocuments({ type: "villa" });
    const cabinCount = await Contact.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "contact", count: contactCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getContactNotes = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    const list = await Promise.all(
      contact.notes.map((note) => {
        return Note.findById(note);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
