import styles from "./AboutUsComponent.module.scss";
import team from "../../assets/images/team.webp";

const AboutUsComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <img src={team} alt="the team together" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
        gravida, tincidunt metus et, blandit leo. Maecenas fermentum mauris at
        lectus luctus, eu sollicitudin ex consequat. Sed lectus dolor, convallis
        at finibus sit amet, tincidunt sit amet purus. Sed placerat ac diam ac
        consequat. In interdum facilisis metus, at rutrum felis faucibus vel.
        Duis sodales, elit id molestie dignissim, tortor ligula fringilla
        sapien, id feugiat metus orci sit amet nulla. Donec tempus feugiat sem,
        id consequat risus tincidunt non. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Fusce ultrices
        feugiat augue, eget lobortis elit pretium nec. Etiam imperdiet erat id
        malesuada pellentesque. Ut erat eros, facilisis a elit nec, lacinia
        ultrices purus. Aliquam ac augue at arcu laoreet fringilla. Proin in
        mattis turpis. Phasellus nec vulputate urna, eu iaculis urna. Mauris
        bibendum ex sit amet faucibus semper. Vestibulum volutpat neque eget
        facilisis mollis. Duis sit amet suscipit ligula. Fusce vel dictum dolor.
        Cras eget ante iaculis, molestie eros in, tempus odio. Aliquam
        tincidunt, massa sed malesuada aliquet, sem libero mollis lorem, ut
        condimentum lorem nisl in nisl. Integer gravida tellus ut tempor
        feugiat. Sed vestibulum erat at molestie dapibus. Cras faucibus tempus
        augue. Nulla quis mi euismod, cursus nisl sit amet, commodo metus.
        Praesent id pretium ligula. Suspendisse eget accumsan mi. Suspendisse
        consequat libero ac hendrerit dignissim.
      </p>
    </div>
  );
};

export default AboutUsComponent;
