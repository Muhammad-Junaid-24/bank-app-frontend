import { clients } from "../constants";
import styles from "../style";

function Clients() {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => {
          return (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:w-min-[192px] min-w-[120px]`}>
              <img
                src={client.logo}
                alt={client.logo}
                className="object-contain sm:w-[192px] w-[122px] h-[38px]"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;
