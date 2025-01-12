import styles from "../../cssModules/PersonalProjects.module.css";

const FreeClasses = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>
        Free Classes in JavaScript, React, HTML, and CSS
      </h1>
      <span>
        Shared knowledge with community members or individuals without
        programming experience by teaching free classes in JavaScript, React,
        HTML, and CSS.
      </span>
    </div>
  );
};

const SalesManagementSystem = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>
        Sales and Scheduling Management System
      </h1>
      <span>
        Developed a system that enables member registration and administration
        with role-based access control and credentials.
        <br /> <br />
        Created a module for client management, along with an interactive
        calendar where salespeople manage their appointments, and administrators
        have full team visibility.
      </span>
    </div>
  );
};

const TicketSalesApplication = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>Event Ticket Sales Web Application</h1>
      <span>
        Developed a web application for event ticket sales, integrated with the
        Mercado Pago payment gateway.
        <br /> <br />
        Generated unique QR codes to validate attendee identity at the event.
        <br /> <br />
        Implemented a discount system using promotional codes and an
        administrative dashboard with role-based access control for managing
        employees and artists.
        <br /> <br />
        Optimized the frontend with automated sliders and a responsive design
        for seamless performance on both mobile and desktop devices.
        <br /> <br />
        <a
          href="https://www.barulloworld.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web site
        </a>
      </span>
    </div>
  );
};

export { FreeClasses, SalesManagementSystem, TicketSalesApplication };
