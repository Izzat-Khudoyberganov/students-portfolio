import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const telegram_api = `https://api.telegram.org/bot${
    import.meta.env.VITE_BOT_TOKEN
  }/sendMessage`;

  const onSubmit = async (data) => {
    const text = `
        UserName: ${data.firstName}\nPhone: ${data.phone}\nMessage: ${data.message}
    `;

    try {
      const res = await fetch(telegram_api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (res.ok) {
        alert("Ok");
      } else {
        alert("Fail");
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 bg-gray-50 p-5 rounded-lg"
    >
      <label htmlFor="name" className="text-2xl font-normal">
        Ism
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ismingizni kiriting"
        className="p-4 border-[1px] border-b-slate-500 rounded-lg"
        {...register("firstName", {
          required: "First name is required",
          maxLength: 30,
        })}
      />
      <p className="text-red-500">{errors.firstName?.message}</p>

      <label htmlFor="phone" className="text-2xl font-normal">
        Telefon
      </label>

      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="UZ"
        className="p-4 border-[1px] border-b-slate-500 rounded-lg "
        {...register("phone", {
          required: "Phone is required",
          minLength: 17,
          maxLength: 30,
        })}
      />
      <p className="text-red-500">{errors.phone?.message}</p>

      <label htmlFor="message" className="text-2xl font-normal">
        Xabar
      </label>
      <textarea
        placeholder="Xabaringizni kiriting"
        className="p-4 border-[1px] border-b-slate-500 rounded-lg resize-none "
        id="message"
        rows={5}
        {...register("message", {
          required: "Message is required!",
          maxLength: 150,
        })}
      ></textarea>
      <p className="text-red-500">{errors.message?.message}</p>

      <button
        type="submit"
        className="bg-slate-900 text-white py-4 rounded-lg hover:bg-slate-700 transition"
      >
        Yuborish
      </button>
    </form>
  );
};

export default ContactForm;
