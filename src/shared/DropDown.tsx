import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';

type ItemType = {
  label: string;
  image?: any; // Can be uri or require()
};

type Props = {
  data: ItemType[];
  onSelect: (item: ItemType) => void;
  placeholder: string;
};

const CustomDropdown = ({ data, onSelect, placeholder }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<ItemType | null>(null);

  const handleSelect = (item: ItemType) => {
    setSelected(item);
    onSelect(item);
    setShowDropdown(false);
  };

  const renderImage = (image?: any) => {
    if (!image) return null;
    return (
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        {renderImage(selected?.image)}
        <Text style={styles.text}>
          {selected ? selected.label : placeholder}
        </Text>
        <Ionicons
          name={showDropdown ? 'chevron-up' : 'chevron-down'}
          size={hp(2.5)}
          color={Colors.gray}
        />
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            style={{}}
            nestedScrollEnabled
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  index !== data.length - 1 && styles.itemBorder,
                ]}
                onPress={() => handleSelect(item)}
              >
                {renderImage(item.image)}
                <Text style={styles.text}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: hp(0.1),
    borderColor: Colors.neutralGray,
    borderRadius: hp(1),
    paddingVertical: hp(1.6),
    paddingHorizontal: hp(1.3),
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: hp(3.5),
    height: hp(3.5),
    borderRadius: hp(1),
    overflow: 'hidden',
    marginRight: hp(1),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    flex: 1,
    fontSize: hp(1.8),
    color: Colors.black,
  },
  dropdown: {
    overflow: 'hidden',
    maxHeight: hp(18),
    backgroundColor: Colors.white,
    borderRadius: hp(1),
    marginTop: hp(0.5),
    borderWidth: hp(0.1),
    borderColor: Colors.whiteGray,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.6),
    paddingHorizontal: hp(1.3),
    gap: hp(1),
  },
  itemBorder: {
    borderBottomWidth: hp(0.1),
    borderBottomColor: Colors.whiteGray,
  },
});

export default CustomDropdown;
