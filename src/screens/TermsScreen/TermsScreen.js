import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles';

const TermsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{marginTop: 10, fontSize: 20}}>TERMOS DE USO</Text>
        <Text style={{marginTop: 10, fontSize: 12}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          maximus eros, a imperdiet odio. Vestibulum et erat sollicitudin,
          varius dolor vel, dictum purus. Mauris ullamcorper magna magna,
          ultrices vehicula ex congue quis. Duis lacinia, leo eu suscipit
          volutpat, nisl mauris posuere leo, facilisis luctus lectus lectus
          tristique lacus. Aenean ut finibus nisi, vel tempus lectus. Morbi
          sollicitudin scelerisque eros id ultrices. Mauris at interdum augue.
          Ut consectetur tellus est, sed bibendum risus semper et. Etiam congue
          quam at lorem imperdiet, sit amet placerat nisl ullamcorper.
        </Text>
        <Text style={{marginTop: 10, fontSize: 12}}>
          Aenean sed libero quis massa tincidunt commodo eget hendrerit orci.
          Nunc urna libero, eleifend sit amet consequat eu, semper ac elit.
          Aenean tempus neque vestibulum leo ultrices vulputate. Phasellus
          mollis mi semper ante ullamcorper malesuada. Aenean eros lectus,
          suscipit sit amet magna ut, pulvinar tempor diam. Nam sollicitudin
          purus convallis malesuada auctor. Morbi auctor imperdiet lacinia.
        </Text>
        <Text style={{marginTop: 10, marginBottom: 10, fontSize: 12}}>
          Quisque porta facilisis metus et vehicula. Sed dictum euismod nulla
          vitae sollicitudin. Phasellus semper sem id mi vulputate ultricies.
          Nunc eget purus quis elit dictum gravida. Maecenas in diam id dolor
          lacinia pellentesque quis id mauris. Quisque eu semper odio. Nam sed
          neque dignissim, tempus ante non, aliquam purus. Pellentesque
          fermentum, erat a laoreet rutrum, diam elit blandit est, at viverra
          mauris felis quis ante. Phasellus bibendum elementum erat ac luctus.
          Nam hendrerit, dui eu efficitur egestas, nisl orci finibus lectus,
          quis blandit leo enim ut justo. Duis sed tincidunt lectus. Fusce
          malesuada nisl non imperdiet laoreet. Duis blandit lectus eget
          sagittis convallis. Fusce ante libero, maximus et dui id, auctor
          dignissim erat.
        </Text>
        <Text style={{marginTop: 10, fontSize: 20}}>
          POLITICA DE PRIVACIDADE
        </Text>
        <Text style={{marginTop: 10, fontSize: 12}}>
          Nam consectetur turpis et nunc vulputate, ut hendrerit risus laoreet.
          Phasellus ac orci sapien. Fusce molestie posuere purus, hendrerit
          molestie nulla fringilla nec. Suspendisse tincidunt ornare est, a
          ullamcorper justo iaculis non. Mauris ac luctus arcu. Phasellus
          sagittis nibh condimentum, cursus felis vel, ultricies dolor. Donec at
          neque eu metus molestie vestibulum vel vitae lectus. Morbi libero sem,
          elementum in mollis nec, semper eu libero. Maecenas faucibus urna nec
          ex hendrerit, in facilisis arcu consectetur. Vivamus ante nibh,
          bibendum et varius vitae, rutrum at augue. Mauris a magna nec leo
          sodales vestibulum. Donec dictum eros nec auctor egestas. Proin
          laoreet nisl eget diam maximus, a vehicula urna ultrices.
        </Text>
        <Text style={{marginTop: 10, fontSize: 12}}>
          Pellentesque vulputate vehicula eros rutrum rutrum. Cras cursus est
          eget lectus gravida, id aliquam sapien eleifend. Curabitur varius,
          urna et convallis porta, orci lorem iaculis sapien, ac malesuada dui
          risus sed augue. Etiam leo justo, iaculis ut ultricies sit amet,
          eleifend blandit mi. Nam non augue ipsum. Fusce eget vulputate ante,
          eget pellentesque sem. Mauris vel vehicula enim, eu consequat sapien.
        </Text>
        <Text style={{marginTop: 10, fontSize: 12}}>
          Suspendisse non enim aliquet purus euismod tempor. Aliquam eu velit
          orci. Etiam luctus nulla purus. Aliquam tempor efficitur ipsum sit
          amet lacinia. In hac habitasse platea dictumst. Donec fringilla
          blandit metus, vel ornare diam molestie sed. Cras vitae cursus orci.
          Mauris eu vulputate odio. Aliquam eget eros luctus, lacinia turpis ac,
          dapibus mauris. Etiam nec metus sit amet nunc condimentum mollis.
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsScreen;
